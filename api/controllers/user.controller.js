import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'
export const test = (req,res)=>{
    res.json({
        message:'API is working'
    })
}


export const updateUser = async(req,res,next)=>{
    console.log('update user called');
    if(req.user.id!==req.params.id){
        return next(errorHandler(401,'you can update only your account'));
    }
    try{
       if(req.body.password){
           req.body.password = bcryptjs.hashSync(req.body.password,10);
       }
       const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                profilePicture:req.body.profilePicture,
            }
        },
        {new: true }
       );
       const {password,...rest} = updatedUser._doc;
       res.status(200).json(rest);
    } catch(error){
          next(error)
    }
}


export const deleteUser = async(req,res,next)=>{
    if(!req.user.id===req.params.id){
        return next(errorHandler(401,'you can delete only your account'));
    }
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'User has been deleted'
        });
    } catch(error){
        next(error);
    }
}