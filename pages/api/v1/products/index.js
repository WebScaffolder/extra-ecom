import Cors from 'cors'
import initMiddleware from '../../../../lib/init-middleware'
import { products as Product } from '../../../../models'

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    })
)

export default async (req, res) => {
    await cors(req, res)
    
    switch (req.method){
        case "GET":
            await handleGetRequest(req, res)
            break
        default:
            res.status(405).send(`Method ${req.method} not allowed`)
            break
    }
}

const handleGetRequest = async (req, res) => {
    const {page, limit} = req.query
    const {priority} = req.body
    const pageNumber = parseInt(page)
    const pageLimit = parseInt(limit)
    const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber
    const postsOffset = pageLimit * (getRealNumber - 1)

    try {
        // conditional query generator
        const totalCount = await Product.count({})
        const products = await Product.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            offset: postsOffset,
            pageLimit,
        })

        const totalPages = Math.ceil(totalCount / pageLimit)
        res.send({
            products,
            totalPages
        })
    } catch (error) {
        console.log('product==>>>>>>>>',error);
        res.status(500).send('Error')
    }
}