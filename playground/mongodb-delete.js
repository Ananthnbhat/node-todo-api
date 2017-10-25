const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
     console.log('Connected to mongodb server');

    //  deleteMany
    // db.collection('Todos').deleteMany({text:'Have a blast'}).then((res)=>{
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text:'eat'}).then((res)=>{
    //         console.log(res);
    //     });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
    //     console.log(res);
 



    // db.collection('Users').deleteMany({name:'Ananth'}).then((res)=>{
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('59ef7f0e15d3b213dc483f18')}).then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    });

    //  db.close();

});