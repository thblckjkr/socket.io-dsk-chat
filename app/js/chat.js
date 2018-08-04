var socket = io("http://localhost");
var username = "";

function addMessage(a,b,c){
    console.log(a,b,c)
}

$('#message').on("click", function(){
    alert("Sending mesage")
    socket.emit("chat", {
        msg: "Hola crayola!",
        room: "main"
    })
})

// Server sends a new message
socket.on('chat', function (msg) {
    var $message = $("<div></div>").html(msg.msg);
    addMessage($message, msg.room, msg.user)
});