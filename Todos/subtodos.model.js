import mongoose from "mongoose"
import { User } from "../Todos/user.model"

const subTodoSchema= new mongoose({

  content :{
    type :String,
    required :true
  },
  completed :{
    type :Boolean,
    default:false
  },
  createdBy :{
    type : mongoose.Schema.Types.ObjectId,
    ref:"User"
  }

},{timestamps:true})


export const SubTodo= mongoose.model("SubTodo",subTodoSchema)