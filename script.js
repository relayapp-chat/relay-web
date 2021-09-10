let server = window.prompt("What server would you like to connect to? \n(leave blank for default)")
if(server = String(null)) {
  server = "localhost:8080"
}
const socket = new WebSocket('ws://' + server);


function sendMessage() {
    const textbox = document.getElementById("textbox")

    console.log(textbox.value);
    socket.send(textbox.value);
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + textbox.value + "\n"
    textbox.value = ""
    

}



function enter(value) {
  if(event.key == "Enter"){
    sendMessage()
  }
  
}
// Create WebSocket connection.


// Connection opened

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log(event.data);
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + event.data;
});

var input = document.getElementById("textbox");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   console.log("hi")
  }
}) 
