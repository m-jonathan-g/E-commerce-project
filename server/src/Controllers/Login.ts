import bcrypt from 'bcryptjs'
import User from '../models/Auth'
import { IUser } from '../Types/AuthType'
import { Request, Response } from 'express'

export const login =  async (req:Request, res:Response) => {
    const { email, password } = req.body

    try {
        const user: IUser | null = await User.findOne({email})

        if (!user) {
            throw new Error('Invalid Email or Password')
        }

        const isValid: boolean = await bcrypt.compare(password, user.password)

        if(!isValid) {
            throw new Error('Invalid Email or Password')
        }

        res.status(200).json({message: 'Login successful', user})
    } catch (error: any) {
        console.error(error.message)
        return res.status(400).json({error: error.message})
    }
}