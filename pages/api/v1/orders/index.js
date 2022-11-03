import Stripe from 'stripe'
import { v4 as uuidv4 } from 'uuid'
import { orders as Order } from '../../../../models';
import { orderitems as OrderItem } from '../../../../models';
import jwt from 'jsonwebtoken';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    switch (req.method) {
        case 'POST':
        await createOrder(req, res);
        break;

        case 'GET':
        await getOrders(req, res);
        break;

        default:
        res.status(405).send(`Method ${req.method} not allowed`);
        break;
    }
};

const createOrder = async (req, res) => {
    try {
        console.log('backend==>>>>>>>>>>>',req.body);
        const { paymentData: {
            id: customerId,
            orderItems,
            name,
            email,
            address,
            country,
            city,
            phone,
            totalPrice,
            stripeTotal,
            productId,
        }
        
        } = req.body;
        
        const { userId } = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );

        const prevCustomer = await stripe.customers.list({
            email: email,
            limit: 1
        })

        const isExistingCustomer = prevCustomer.data.length > 0

        let newCustomer
        if(!isExistingCustomer){
            newCustomer = await stripe.customers.create({
                email: email,
                source: customerId
            })
        }

        const customer = (isExistingCustomer && prevCustomer.data[0].id) || newCustomer.id

        await stripe.charges.create({
            currency: "usd",
            amount: stripeTotal,
            receipt_email: email,
            customer,
            description: `Checkout | ${email} | ${customerId} | ProductID ${productId}`
        },{
            idempotencyKey: uuidv4()
        })

        const newOrder = new Order({
            userId,
            name,
            email,
            address,
            country,
            city,
            phone,
            totalPrice,
        });

        const { id } = await newOrder.save();

        await createOrderItems(orderItems, userId, id);

        res.json({
            msg: 'Order success! We will contact you to confirm the order.',
            newOrder,
        });
    } catch (err) {
        console.log('error message =====>', err);
        return res.status(500).json({ err: err.message });
    }
};

const createOrderItems = async (orderItems, userId, id) => {
    const promiseItems = orderItems.map((order) =>
        new OrderItem({
            title: order.title,
            quantity: order.quantity,
            img_url: order.img_url,
            price: order.price,
            productId: order.productId,
            userId,
            orderId: id,
        }).save()
    );

  await Promise.all(promiseItems);
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [
                {
                    model: OrderItem,
                    as: 'ordersItem',
                    attributes: ['id', 'title', 'price', 'img_url', 'quantity']
                },
            ],
        })
        res.send({ orders })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}