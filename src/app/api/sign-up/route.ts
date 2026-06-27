import dbConnect from "@/lib/dbConnect"; //needed in everyroute as next works edges
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { success } from "zod";

export async  function POST(request:Request){
    await dbConnect()
    try {
        const {username, email, password} = await request.json()
        const existingUserVerifiedByUsername =  await UserModel.findOne({
            username,
            isVerified : true
        })

        if (existingUserVerifiedByUsername){
            return Response.json({
                success: false,
                message : "Username is already taken"
            }, {status : 400})
        }
        const existingUserByEmail = await UserModel.findOne({
            email,
            isVerified : true
        })
        
        if(existingUserByEmail){
            // return Response.json({
            //     success : false,
            //     message : "Email already registered"
            // }, {status : 400})
            true //TODO: here later
        }
        else{
           const hashed = await bcrypt.hash(password,10)
           const expiryDate = new Date()
           expiryDate.setHours(expiryDate.getHours()+1)
        }
    } catch (error) {
        console.error('Error registering user', error)
        return Response.json({ //send to frontend
            success: false,
            message : "Error registering user"
        },
    {
        status : 500
    }
)
        
    }
}