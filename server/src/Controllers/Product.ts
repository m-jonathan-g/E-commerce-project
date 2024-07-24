import { Request, Response } from "express";
import { ProductModel, ImageModel } from "../models/AddProduct";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`)
    }
})

export const upload = multer({ storage: storage })

export const createProduct = async (req:Request, res:Response) => {
     
    const {name, description, price, category, productionDate} = req.body
    const product = new ProductModel({
        name, 
        description, 
        price, 
        category, 
        productionDate,
    })

    if (req.files) {
        const files = req.files as Express.Multer.File[];
        const images = files.map((file) => {
            return new ImageModel({
                path: file.path,
                originalName: file.originalname,
                mimeType: file.mimetype
            })
            
        })
        product.images = await ImageModel.insertMany(images)
    }

    try {
        await product.save();
        res.status(201).json({message: 'Product created successfully!', product})
    }catch (error) {
        res.status(500).json({message: 'Something went wrong!'})
    }
}

export const getProducts = async (req:Request, res:Response) => {
    try{
        const products = await ProductModel.find().populate('images')
        res.status(200).json({products})
    }catch (error) {
        res.status(500).json({message: 'Something went wrong!'})
    }
}

