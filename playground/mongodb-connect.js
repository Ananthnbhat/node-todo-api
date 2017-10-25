// const MongoClient=require('mongodb').MongoClient;//mongoclient is a mongodb library
const {MongoClient,ObjectID}=require('mongodb');
const obj=new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
     console.log('Connected to mongodb server');

    //  db.collection('Todos').insertOne({
    //      text:'Something to do',
    //      completed:false
    //  },(err,res)=>{
    //      if(err) return console.log('Unable to insert todo');
    //      console.log(JSON.stringify(res.ops,undefined,2));
    //  });
    // db.collection('Users').insertOne({
    //     name:"Ananth",
    //     age:21,
    //     location:"Bangalore,India"

    // },(err,res)=>{
    //     if(err) return console.log('Unable to insert todo');
    //     console.log(JSON.stringify(res.ops,undefined,3));
    // });
    db.collection('Users').insertOne({
        name:"Bhat",
        age:21,
        location:"Bangalore,India"

    },(err,res)=>{
        if(err) return console.log('Unable to insert todo');
        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,3));
    });
     db.close();
});//to connect to the database and insert docs into the database