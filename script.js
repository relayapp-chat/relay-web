let server = window.prompt("What server would you like to connect to? \n(leave blank for default)")
console.log(server)
if(server == null) {
  server = "localhost:8080"
}
const socket = new WebSocket('ws://' + server);


function sendMessage() {
    const textbox = document.getElementById("textbox")

    console.log(textbox.value);
    socket.send(textbox.value);
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
