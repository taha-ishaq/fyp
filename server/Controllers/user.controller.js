import User from '../models/user.model.js'
import bcrypt from "bcryptjs";
import { generateToken } from '../libs/generateToken.js';
import cloudinary from '../libs/cloudinary.js';


export const registerUser=async(req,res)=>{
  const{email,password,username,profilepic,role}=req.body;
  try {
    if(!email || !password || !username || !role){
     return res.status(401).json({error:"All fields except picture required required"});
    }
    const user = await User.findOne({email});
    if(user){
     return res.status(401).json({error:"User already exists"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let imageUrl;
    if (profilepic) {
      const uploadResponse = await cloudinary.uploader.upload(profilepic);
      imageUrl = uploadResponse.secure_url;
    }
    const newUser = new User({
      password:hashedPassword,
      email,
      username,
      profilepic:imageUrl,
      role,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

     return res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        username:newUser.username,
        profilepic:newUser.profilepic,
        role:newUser.role,
      });
    }else {
      res.status(400).json({ message: "Invalid user data" });
    } 

  } catch (error) {
    console.error("Error in registeruser ctrler",error)
  }
}


export const loginUser=async(req,res)=>{
const {email,password}=req.body;
try {
  if(!email || !password){
    return res.status(401).json({error:"Both fields are required"});
  }
  const user = await User.findOne({email})
  if(!user){
    return res.status(404).json({error:"user not found"});
  }
  const isPasswordCorrect = await bcrypt.compare(password,user.password);
  if(!isPasswordCorrect){
    return res.status(401).json({error:"Invalid creds"});
  }
  generateToken(user._id,res)
  return res.status(200).json({
    _id:user._id,
    email:user.email,
  })
  
} catch (error) {
  console.error("Error in login user",error)
}
}