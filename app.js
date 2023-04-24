const express = require('express')
const cors = require('cors');
const app = express();

const StudentRoute = require('./routes/student.route')
const UserRoute = require('./routes/user.route') 

const db = require("./config/database")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/',StudentRoute);
app.use('/users',UserRoute);
const corsOptions = {
    origin: ['http://localhost:3031/users/show', 'http://localhost:3031/users/sub','http://localhost:3031/users/login'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization']
  };
  
app.use(cors(corsOptions));
db.connect();

app.listen(process.env.APP_PORT);



//add()
//deletebyid();
/*
async function add(){
   
    try 
    {
        const std = await Student.create(
            {
                name :'test030FF3',
                age:2,

            });    
        await std.save();
        console.log('added',std);
      
    }
    catch (er){
console.log(er.message)
    }
       
   ///
}

async function addwithCourse(){
     try{

        const std = await Student.create(
            {
                name :'ayman2',
                age:20,
                
            });    
        await std.save();
        console.log('added',std);
     }catch(err){
        console.log(err.message)
     }
   
}

async function findbyid(){
    const std = await Student.findById('63e787da7786c9624f5608d5')   
    console.log('found',std);
}

async function Updatebyid(){
    const std = await Student.findById('63e787da7786c9624f5608d5')  
    console.log('found',std); 
    std.name='updatedName'
    std.save()
    console.log('updated',std);
}


async function deletebyid(){
    const std = await Student.findByIdAndDelete('63e653f302e02adb9ee42032')    
    console.log('deleted',std);      
}


async function findbyname(){
    const std = await Student.find({name:'riad'});       
    console.log('found',std);
}

 
async function findwhere(){
    const std = await Student.where('name')
                                .equals('riad')
                                .limit(3)
                                .select('name');  
    
    console.log('found',std);
}
  */
