var fs=require('fs');
var express=require('express');
var app=express();

app.use(express.static(__dirname));
app.get('/',function(req,res){
	res.sendFile(__dirname+'/portfolio.html');
});
app.get('/getUsers',function(req,res){
	fs.readFile('data.json','utf-8',function(err,data){
		console.log(data);
		res.send(data);
		})
	});

app.listen(process.env.PORT||8080);
console.log('Server run!');
