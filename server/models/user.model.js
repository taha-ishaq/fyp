import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    profilepic:{
        type:String,
        default:""
    },
    role: {
        type: String,
        enum: ["teacher", "student", "CR"], 
        required: true 
      }
})

 const User = new mongoose.model("user",userSchema);
export default User