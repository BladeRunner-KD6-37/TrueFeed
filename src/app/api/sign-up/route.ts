import dbConnect from "@/lib/dbConnect"; //needed in everyroute as next works edges
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { success } from "zod";

export async  function POST(request:Request){
    await dbConnect()
    try {
        const {username, email, password} = await request.json()
        
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