import mongoose from "mongoose"

const userSchema= new mongoose({
  username:{
    type:String,
    required: true,
    lowercase:true,
  },
  email :{
    type:String,
    required:true,
    lowercase:true
  },
  password:{
    type : Number,
    required:[true,"enter password"]
  }

},{timestamps: true})

export const User = mongoose.model("User",userSchema)