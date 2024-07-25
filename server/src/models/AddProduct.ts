import mongoose, {Document, Model, Schema} from "mongoose";
import { Image, ProductType } from "../Types/ProductType";


const productSchema = new Schema<ProductType> ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    subCategory: {type: String, require: true},
    productionDate: {type: Date, required: true},
    images: [{type: Schema.Types.ObjectId, ref: 'Image'}]
})

const imageSchema = new Schema<Image>({
    path: { type: String, required: true },
    originalName: { type: String, required: true },
    mimeType: { type: String, required: true },
})

export const ProductModel: Model<ProductType> = mongoose.model('Product', productSchema)
export const ImageModel: Model<Image> = mongoose.model('Image', imageSchema)

