const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FOOGLE:07032003#Sc@cluster0.srjew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, ()=>{

            console.log("connected");
    });

}

module.exports = mongoDB;