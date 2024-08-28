import mongoose from "mongoose";




export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
            const connection =  mongoose.connection
            
            connection.on('connected', ()=>{
                console.log('MongoDb connected');

            })
            
            connection.on('error', (err)=>{
                console.log('MongoDb connection error , pleaser check db is running ' + err);
                process.exit()

            })
    } catch(error){
        console.log("somethng went wrong");
        console.log(error);
    }
}