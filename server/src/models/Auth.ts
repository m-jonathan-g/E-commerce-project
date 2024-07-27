import { IUser } from "../Types/AuthType";
import mongoose, {Schema} from "mongoose";

export interface IUserModel extends IUser, Document {
    isAdmin: boolean;
};

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    }
})

export default mongoose.model<IUserModel>('User', userSchema)