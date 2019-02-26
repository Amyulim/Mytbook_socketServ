const express = require("express");
const app = express();

const server = app.listen(8800,(err)=>{
	if (err){
		console.log(err);
		return false;
	}
	console.log( "8800 is opened");
});

var io = require("socket.io")(server);

io.on("connection", (socket)=>{
	io.emit("user_connected");
	
	socket.on("send_message",(data)=>{
		console.log(data)
		io.emit("new_msg", data);
	})
});