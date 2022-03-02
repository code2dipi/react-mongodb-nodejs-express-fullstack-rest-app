const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

// Retrive config. files from environment
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;  

app.use(cors());
app.use(express.json());

const URI=process.env.ATLAS_URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}   //useCreateIndex useUnifiedTopology
    )

   // mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then( ()=>{console.log("connected successfully");}).catch( (err)=>{console.log(err);})


const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoCloud Database has been connected succesfully");
})

//router handling when the request comes in..
const userRouter=require('./routes/users');
const postRouter=require('./routes/posts');


app.use('/users',userRouter);
app.use('/posts',postRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
