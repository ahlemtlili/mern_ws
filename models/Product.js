const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{type:String,required:true,uppercase:true},
    price:Number,
    createdOn:{type:Date,default:Date.now()},
    available:{type:Boolean,default:true},
    image:String
}
)
module.exports= Product = mongoose.model('product',productSchema );
