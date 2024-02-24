import mongoose from "mongoose"

const todoSchema = new mongoose({
  content:{
    type:String,
    required :true
  },
  completed :{
    type :true,
    default :false 
  },
  createdBy :{
        type :mongoose.Schema.Types.ObjectId,
        ref : "User"
  }


},{timestamps: true})


export const Todo = mongoose.model("Todo",todoSchema)