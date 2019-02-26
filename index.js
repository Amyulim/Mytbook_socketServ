const express = require("express");
const app = express();
const port = process.ev.port || 8800;

app.all('/',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
  next();
});
const server = app.listen(port,(err)=>{
	if (err){
		console.log(err);
		return false;
	}
	console.log( port + " is opened");
});

var io = require("socket.io")(server);

io.on("connection", (socket)=>{
	io.emit("user_connected");
	
	socket.on("send_message",(data)=>{
		console.log(data)
		io.emit("new_msg", data);
	})
});