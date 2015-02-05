var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var less = require('less');
var port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', __dirname + '/../frontend/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname + "./../frontend/public")));



// less.render('.class { width: (1 + 1) }', function (e, output) {
//   console.log(output.css);
// });

app.get('/', function(req, res) {
  res.render('board.html');
});

server.listen(port, function() {
  console.log('Im an express server listening at port',port);
});