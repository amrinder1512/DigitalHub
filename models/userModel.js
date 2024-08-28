import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
    username: {type:String , required:[true, "Please enter the username"],
        unique: true
    },
     email : {
        type :String, required:[true, " Please enter the email"],
        unique:true
     },
     password : {
        type :String, required:[true, " Please enter the password"]
     },
     isVerified : {
        type: Boolean,
        default: fasle
     },
     isAdmin : {
        type: Boolean,
        default: fasle
     },
     forgotPasswordToken: String,
     forgotPasswordTokenExpiry: Date,
     verifyToken: String,
     verifyTokenExpiry: Date
})


const User = mongoose.models.users ||  mongoose.model("users", userSchema)
export default User;
