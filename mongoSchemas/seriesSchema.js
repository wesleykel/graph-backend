

import mongoose from 'mongoose';

const {Schema} = mongoose

export const seriesSchema = new Schema({
    seriesName:  String,
 
    year: Number, 
    
    rating: String
    

});