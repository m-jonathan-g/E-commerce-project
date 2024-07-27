import express from 'express'
import { createProduct,  getProducts, upload } from '../Controllers/Product'
import { adminMiddleware } from '../middleware/userMiddleware'

const router = express.Router()

router.post('/products', upload.array('images', 12),  createProduct)
router.get('/products', getProducts)

export default router