const Mongoose= require('mongoose')

Mongoose.connect('mongodb+srv://bro123:pratham@pratham.j9fifsz.mongodb.net/')
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log("error",err);
    
})

const todoSchema=Mongoose.Schema({
    title:String,
    description:String,
    completed:{type:Boolean, default:false}
})

const todoModel=Mongoose.model('todos',todoSchema)

module.exports={
    todoModel
}