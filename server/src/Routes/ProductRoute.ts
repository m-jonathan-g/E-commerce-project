import express from 'express'
import { createProduct, getProducts, upload } from '../Controllers/Product'

const router = express.Router()

router.post('/products', upload.array('images', 12), createProduct)
router.get('/products', getProducts)

export default router