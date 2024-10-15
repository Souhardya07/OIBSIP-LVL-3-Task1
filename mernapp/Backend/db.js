const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://FOOGLE:07032003f@cluster0.srjew.mongodb.net/FOOGLEmern?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB =async() =>{
  await mongoose.connect(mongoURI, {useNewUrlParser: true ,useUnifiedTopology: true},async(err,result) => {
   if (err) console.log("---",err)
    else{
    console.log("connected");
     const fectched_data = await mongoose.connection.db.collection("sample")
     fectched_data.find({}).toArray( function(err,data){
      if(err) console.log(err);
      else console.log();
     })
    }
  });

}

module.exports = mongoDB;