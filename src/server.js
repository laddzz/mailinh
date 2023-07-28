const express = require('express')
const handlebars = require('express-handlebars')
const morgan  = require('morgan')
const app = express()
const port = 3000

const route= require('./routes/server');
//http logger 
app.use(morgan())

// template engine 
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/resources/views');
// req.body
app.use(express.urlencoded({extended:true}));
app.use(express.json())
//static 
app.use(express.static('src/public'))
// routes 
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})