
const {home,quotes,add} = require("./controller.js")

function router(app){
    
    app.get('/', home)    
    app.get('/allQuotes', quotes)
    app.post("/addQuote",add)

}
module.exports = router;