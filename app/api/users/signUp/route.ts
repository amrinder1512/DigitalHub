import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utility/mailer";

connect()
 

export async function POST (request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);


        //Check if user is already exits\
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User alredy exists"}, {status:400})
        }


        //hash password
         const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,   
            email,
            password: hashedPassword
        }) 
        const savedUser = await newUser.save()
        console.log(savedUser);


        //send Verification email
        await sendEmail ({email, emailType:"VERIFY", userId:savedUser._id })


        return NextResponse.json({
            message: "user created succesfully",
            success: true,
            savedUser 
        })


    } catch (error:any) {
        return NextResponse.json({error: error.message},
            {status:500})
        
    }
}





export async function GET(response:NextResponse) {
    const user = await User.find();
    return NextResponse.json(user)
    
}