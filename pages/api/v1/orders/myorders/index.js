import { 
    orders as Order,
    orderitems as OrderItem
} from '../../../../../models';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
    switch (req.method){
        case "GET":
            await getOrdersByUser(req, res)
            break

        default:
            res.status(405).send(`Method ${req.method} not allowed`)
            break
    }
}

const getOrdersByUser = async (req, res) => {
    try {
        const { userId } = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
    
        const order = await Order.findAll({
            where:{ userId: userId },
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{
                model: OrderItem, 
                as: 'ordersItem',
                attributes: ['id', 'title', 'price', 'img_url', 'quantity']
            }]
        });
    
        // console.log(order)
    
        if (!order) return res.status(404).json({ msg: 'order not exist' });
        res.status(200).json(order);
    } catch (error) {
        console.log(error)
        res.status(500).send("Something wrong");
    }
};
  