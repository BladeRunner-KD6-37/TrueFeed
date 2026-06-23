import mongoose from 'mongoose'

type ConnectionObject =  {
    isConnected ?: number // optional, but if arrives, it must be a number
}
const connection : ConnectionObject = {}

async function dbConnect() :  Promise<void>{  // void here means we don't care about what is inside promise \
    if(connection.isConnected){
        console.log("Already onnected to database");
        return        
    }

    try {
        const db  = await mongoose.connect(process.env.MONGODB_URI || "")

        connection.isConnected =db.connections[0].readyState
        console.log("DB connected Successfully");
        
    } catch (error) {
        console.log("DB connection failed!", error);

        
        process.exit(1)
        
    }

}


export default dbConnect;