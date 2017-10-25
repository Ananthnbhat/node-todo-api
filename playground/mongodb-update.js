const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
     console.log('Connected to mongodb server');

  db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('59ef72aff52dd01b2ca7852f')
  },{
    $set:{
        name:'Ananth'
    },
    $inc:{
       age:1
    }
  },{
returnOriginal:false
  }).then((res)=>{
      console.log(res);
  });

    //  db.close();

});