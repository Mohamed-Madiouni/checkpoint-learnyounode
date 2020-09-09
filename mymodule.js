

var fs = require("fs");
let path =require("path")
module.exports= function (a,b,callback){
    fs.readdir(a, function (err, list) {
       if (err)
         return callback(err)
   
       list = list.filter(function (file) {
          return path.extname(file) === '.' + b
       })
   
       callback(null, list)
     })
    }