const Post = require('../models/post.js')
module.exports.home = function(req,res){
  Post.find({}).populate('user').exec(function(err,posts){
    return res.render('home',{
      title : "Codeial | Home", posts : posts
    })
  })
}