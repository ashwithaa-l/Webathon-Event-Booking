const mongoose=require('mongoose');

const bschema=new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    gender:{
        type:String
    },
    Email:{
        type:String
    },
    phoneno:{
        type:Number
    },
    eventname:{
        type:String
    },
    date:{
        type:Date
    }

    }
)

const booking=mongoose.model('Booking',bschema);

module.exports={booking}