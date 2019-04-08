const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/quotes',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));

const QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    quote:{
        type: String,
        required: true,
    }
    },
    {timestamps:true})

const Quotes = mongoose.model('quotes', QuoteSchema);

module.exports = Quotes;