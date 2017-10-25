const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
     console.log('Connected to mongodb server');

    //  db.collection('Todos').find({_id:new ObjectID('59ef7076a324d11b144fdffd')}).toArray().then((docs)=>{
    //      console.log('Todos');
    //      console.log(JSON.stringify(docs,undefined,3));
    //  },(err)=>{
    //      console.log('Unable to fetch todos ',err);
    //  });
db.collection('Users').find().toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,3));
},(err)=>{
    console.log('Unable to fetch todos ',err);
})
    
     db.close();
});//to connect to the database and insert docs into the database