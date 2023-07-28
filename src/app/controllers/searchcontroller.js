class searchcontroller{

    index(req, res) {
        res.render('search');
      }
      
show(req,res)   {
  res.send('xin chào');
}
}
module.exports = new searchcontroller