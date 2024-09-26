import {Request , Response} from 'express';
import prisma from '../config/db.config.js';
import jwt from "jsonwebtoken"


interface LoginPayloadType {
    name:string;
    email:string;
    provider:string;
    oauth_id:string;
    image:string;
}

class AuthController {

    static async login(req:Request , res:Response){
        try {
            const body:LoginPayloadType = req.body
            let findUser = await prisma.user.findUnique({
                where: {
                    email : body.email
                }
            })

            if(!findUser){
                findUser = await prisma.user.create({
                    data:body
                })
            }

            let JwtPayload = {
                name : body.name,
                email: body.email,
                id: findUser.id
            }

            // generate token
            const token = jwt.sign(JwtPayload , process.env.JWT_SECRET , {
                expiresIn:"365d"
            })

            return res.json({
                message:"LoggedIn successfully",
                user: {
                    ...findUser,
                    token:`Bearer ${token}`
                }
            })


        } catch (error) {
            return res.status(400).json({
                message:"Something went wrong. Please try again!"
            })
        }
   
    }

}

export default AuthController