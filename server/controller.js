module.exports = {
    home:home,
    quotes:allQuotes,
    add:addQuote
}
const Quotes = require("./model.js");

function home(req,res){
    res.render('index')
}

function allQuotes(req,res){

    Quotes.find({}, function(errs, data){
        if(errs){
            console.log(errs)
        }
        res.render('quotes', {data:data})
    })

}

function  addQuote(req,res){

    console.log(req.body)
    Quotes.create(req.body, (errs, results)=>{
        if(errs){
        
            console.log(errs);
        }
        else{
            console.log(results)
        }
        res.redirect('/allQuotes')
    })

    
}