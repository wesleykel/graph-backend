import mongoose from 'mongoose';

const {Schema} = mongoose

export const friendSchema = new Schema({
    firstName:  String,
    
    lastName:String,
    
    gender:String,
    
    age:  Number,
    
    language: String,
    
    email: String,
    
    contacts:Array,
    
});