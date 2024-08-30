import { NextResponse } from "next/server";



export default function GET(){
    try {
        const response = NextResponse.json({
            message:"Logout Succesful",
            success:true,
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500});

        
    }

}