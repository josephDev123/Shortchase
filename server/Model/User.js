import mongoose from 'mongoose';

const schema = mongoose.Schema({
   
    name:{
        type:String,
        maxLength:20,
        minLength: 5
    },

    phone: {
        type:String,
        maxLength: 11,
        minLength: 11,
        unique: true
    },
    month: {
            type:String,
            maxLength: '11'
        },

    day: {
            type:Number,
            max: '2'
        },

    year: {
            type:Number,
            maxLength: '4'
        }
   
   
    // email:  {
    //     type:String,
    //     match: /.+\@.+\..+/,
    //     unique: true
    // },
})

export const User = mongoose.model('User', schema);