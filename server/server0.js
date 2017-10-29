//connect to the database,create a model for the todo validation,create the todo and save it to database
//setting up mongoose and validators, types, defaults
var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{
    useMongoClient: true
});

var Todo=mongoose.model('Todo',{
 text:{
type:String,
required:true,
minlength:1,
trim:true
 },
 completed:{
type:Boolean,
default:false
 },
 completedAt:{
type:Number,
default:null
 }
});



// var otherTodo=new Todo({
//     text:'Feed the dog',
//     completed:true,
//     completedAt:123
// });
// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('Unable to save',e);
// });

var User=mongoose.model('User',{
email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
}
});

var user=new User({
    email:'ananth@ex.com'
});

user.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
    console.log('Unable to save user',e);
});
