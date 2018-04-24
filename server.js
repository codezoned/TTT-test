var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

var text;
var map = {};
var array = [];

app.get('/',(req,res,next) => {
  res.render('page.ejs',{something:text});
})

function wordCount(para) {

  var words = para.replace(/[.,?!;()"'-]/g, " ")
              .replace(/\s+/g, " ")
              .toLowerCase()
              .split(" ");
  words.forEach((word) => {
    if(!(map.hasOwnProperty(word))) {
      map[word]++;
    }
  });
}

app.post('/links',(req,res) => {
  //res.render('page.ejs',{something:text});
  res.redirect('/');
})
app.listen(3000, () => {
  console.log(`Server's up at ${PORT}`);
  request.get("http://terriblytinytales.com/test.txt", (err,res,body) => {
    if(!err) {
      text = body;

    }
    else {console.log(err);}

  });
});
