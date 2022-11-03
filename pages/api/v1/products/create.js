import Cors from 'cors'
import initMiddleware from '../../../../lib/init-middleware'
import isLength from 'validator/lib/isLength'
import { products as Product } from '../../../../models'

// Initialize the cors middlewares
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

export default async (req, res) => {
    await cors(req, res)
    if(!("authorization" in req.headers)){
        return res.status(401).json({message: "No autorization token"});
    }
    const {
        title, price, mediaUrl, 
        short_description, long_description, 
        additional_info, sku, availability, category, tag
    } = req.body

    // console.log(req.body)

    try {
        if (!isLength(title, {min: 3})) {
            return res.status(422).send("The title should be a minimum of Three characters long")
        } else if (!price){
            return res.status(422).send("Price required")
        } else if (!mediaUrl){
            return res.status(422).send("Product image required")
        } else if (!short_description){
            return res.status(422).send("Short description required")
        } else if (!long_description){
            return res.status(422).send("Long description required")
        } else if (!additional_info){
            return res.status(422).send("Additional information required")
        } else if (!sku){
            return res.status(422).send("SKU required")
        } else if (!availability){
            return res.status(422).send("Availability info required")
        } else if (!category){
            return res.status(422).send("Category required")
        } else if (!tag){
            return res.status(422).send("Tag required")
        }

        await Product.create({
            title,
            price,
            img_url: mediaUrl,
            short_description,
            long_description,
            additional_info,
            sku,
            availability,
            category,
            tag
        })

        res.send("Product created successfully!")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error in creating product, please try again!")
    }
}