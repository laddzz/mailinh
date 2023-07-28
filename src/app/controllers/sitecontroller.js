class sitecontroller{
    index(req,res){
        res.render('home')
    }
}

module.exports= new sitecontroller