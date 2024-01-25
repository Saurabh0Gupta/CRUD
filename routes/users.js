const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/crud");

const taskSchema=mongoose.Schema({
  task:String,
})

module.exports=mongoose.model("task",taskSchema);