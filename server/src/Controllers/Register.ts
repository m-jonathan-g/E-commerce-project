import bcrypt from 'bcryptjs'
import User from '../models/Auth'
import { IUser } from '../Types/AuthType'
import { Request, Response } from 'express'

export const register =  async(req:Request, res:Response) => {
    const {firstName, lastName, email, password, isAdmin} = req.body

    try {
    const hashedPassword: string = await bcrypt.hash(password, 10)

    const user:IUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isAdmin: isAdmin || true
    })

    
        res.status(200).json({mssg: 'User created successfully', user});
    } catch (error: any) {
        console.error(error.message)
        res.status(500).json({mssg: error.message})
    }
}