class youtubecontroller {

    index(req,res){
        res.render('youtube')
    }
    show(req,res)
    {
        res.render('youtubechanel')
    }
}

module.exports = new youtubecontroller