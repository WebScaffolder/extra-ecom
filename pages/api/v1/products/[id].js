import Cors from 'cors';
import initMiddleware from '../../../../lib/init-middleware';
import isLength from 'validator/lib/isLength'
import { products as Product } from '../../../../models';

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
);

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
        await getSingleProduct(req, res);
        break;

        case 'PUT':
        await updateProduct(req, res);
        break;

        case 'DELETE':
        await deleteProduct(req, res);
        break;

        default:
        res.status(405).send(`Method ${req.method} not allowed`);
        break;
    }
};

const getSingleProduct = async (req, res) => {
    const { id } = req.query;

    try {
        const product = await Product.findOne({
            where: { id: id },
        });

        res.status(200).send({ product: product });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
};

const updateProduct = async (req, res) => {
    if (!('authorization' in req.headers)) {
        return res.status(401).json({ message: 'No autorization token' });
    }
    const {
        title,
        price,
        img_url,
        short_description,
        long_description,
        additional_info,
        sku,
        availability,
        category,
        tag,
    } = req.body;

    try {
        if (!isLength(title, { min: 3 })) {
        return res
            .status(422)
            .send('The title should be a minimum of Three characters long');
        } else if (!price) {
            return res.status(422).send('Price required');
        } else if (!img_url) {
            return res.status(422).send('Product image required');
        } else if (!short_description) {
            return res.status(422).send('Short description required');
        } else if (!long_description) {
            return res.status(422).send('Long description required');
        } else if (!additional_info) {
            return res.status(422).send('Additional information required');
        } else if (!sku) {
            return res.status(422).send('SKU required');
        } else if (!availability) {
            return res.status(422).send('Availability info required');
        } else if (!category) {
            return res.status(422).send('Category required');
        } else if (!tag) {
            return res.status(422).send('Tag required');
        }

        let product = await Product.findByPk(req.query.id);

        await product.update({
            title,
            price,
            img_url,
            short_description,
            long_description,
            additional_info,
            sku,
            availability,
            category,
            tag
        });

        const products = await Product.findAll({ order: [['createdAt', 'DESC']] });
        return res.status(200).json({ message: 'Successfully Deleted', products });
    } catch (error) {
        console.log('update=>>>>>>>>>>>>', error);
        res.status(500).send('Error in creating product, please try again!');
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.query.id,
            },
        });
        const products = await Product.findAll({ order: [['createdAt', 'DESC']] });
        return res.status(200).json({ message: 'Successfully Deleted', products });
    } catch (error) {
        res.status(500).send('Error in deleting product, please try again!');
    }
};
