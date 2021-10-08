window.onload = function() {
document.querySelector('emoji-picker').addEventListener('emoji-click', event => {
    document.getElementById("textbox").value = document.getElementById("textbox").value + event.detail.unicode;
    focusTextbox()
  });
}
let server = window.prompt("What server would you like to connect to? \n(leave blank for default)")
console.log(server)
if(server == null) {
  server = "localhost:8080"
}
const socket = new WebSocket('ws://' + server);

function focusTextbox() {
  document.getElementById("textbox").focus()
}


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

socket.addEventListener('message', function onMessage(event) {
    console.log(event.data);
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + event.data;
    var audio = new Audio('send.mp3');
    audio.play();
});

function toggleChannelSlideover() {
  let x = document.getElementById("channels-slideover");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 


socket.onclose = function onclose() {
  alert("Server Disconnected");
  location.reload();
};
