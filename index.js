var express = require('express');

var app = express();

app.get('/',function(req, res){
	res.send('Express Started');
})

app.listen(3000,function(){
	console.log('Server started at port 3000');
});