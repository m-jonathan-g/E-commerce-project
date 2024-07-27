import { NextFunction, Request, Response } from "express";
import User from '../models/Auth'

export const adminMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const { userId } = req.body

    try{
        const user = await User.findById(userId)

        if(user && user.isAdmin) {
            next()
        } else {
            res.status(403).json({mssg: 'Access Denied. Admin access only!'})
        }
    } catch (error) {
        console.error
        res.status(500).json({message:'Server Error'})
    }
}