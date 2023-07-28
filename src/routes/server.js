const searchcontroller = require('./search')
const youtubecontroller = require ('./youtube')
const sitecontroller = require('./site')
const facebookcontroller = require('./facebook')

route=(app)=>
{
   app.use('/facebook',facebookcontroller)
   app.use('/search',searchcontroller)
   app.use('/youtube',youtubecontroller)
   app.use('/',sitecontroller)
}


module.exports= route
