const express= require('express');
const app = express();
const {createTodo,updateTodo}=require('../Backend/types.js')
const {todoModel}=require('./db.js')
const cors=require('cors')
app.use(express.json());
app.use(cors())
app.post('/todos', async function(req, res){
    const createPayload=req.body
    const parsedPayload=createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong input"
        })
        return
    }

    await todoModel.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"todo created"
    })
})

app.get('/todos', async function(req, res){
   const todos=await todoModel.find({})
   res.json({
    todos
   })
   
})

app.put('/completed',async function(req,res){
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"wrong input"
        })
        return
    }

    await todoModel.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo markeds as Complete"
    })

})



app.listen(3000)