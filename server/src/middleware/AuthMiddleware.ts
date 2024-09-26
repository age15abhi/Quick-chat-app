import jwt from "jsonwebtoken"
import { Request , Response , NextFunction } from "express"

// it take the token from the authorization header
//and verify it 
// if the token is verify then i return the user
// and we can store that login user in the req.user
// for that we create a interface and override it 

const authMiddleware = (req:Request , res:Response , next:NextFunction) => {

    const authHeader = req.headers.authorization
    
    if(authHeader == null || authHeader == undefined) {
       return res.status(401).json({status:401 , message:"Unauthorized access"});
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token , process.env.JWT_SECRET , (err , user) => {
        if(err) return res.status(401).json({status:401 , message:"Unauthorized access"});
        req.user = user as AuthUser;
        next();
    })
}


export default authMiddleware;