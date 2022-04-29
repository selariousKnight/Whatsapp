function statuscharts(){
let chartContainer =  document.getElementById("chartContainer");
let statusContainer =  document.getElementById("statusContainer");
let callsContainer = document.getElementById("callsContainer")
let chatButton = document.getElementById("chatButtonid");
let statusButton =document.getElementById("statusButtonid")
let callButton = document.getElementById("callButtonid")
chatButton.style.textDecoration = "underline";
statusButton.style.textDecoration = "none"
callButton.style.textDecoration = "none"
chartContainer.style.display=  "block"
statusContainer.style.display = "none"
callsContainer.style.display = "none"
chatButton.style.color =  "blue"
statusButton.style.color =  "#455A64"
callButton.style.color =  "#455A64"
}
function statusStatus(){
let chartContainer =  document.getElementById("chartContainer");
let statusContainer =  document.getElementById("statusContainer");
let callsContainer = document.getElementById("callsContainer");
let chatButton = document.getElementById("chatButtonid");
let statusButton = document.getElementById("statusButtonid");
let callButton = document.getElementById("callButtonid");
chatButton.style.textDecoration = "none"
statusButton.style.textDecoration = "underline"
callButton.style.textDecoration = "none"
chartContainer.style.display = "none"
statusContainer.style.display=  "block"
callsContainer.style.display = "none"
chatButton.style.color =  "#455A64"
statusButton.style.color =  "blue"
callButton.style.color =  "#455A64"
}
function statusCalls(){
let chartContainer =  document.getElementById("chartContainer");
let statusContainer =  document.getElementById("statusContainer");
let callsContainer = document.getElementById("callsContainer");
let chatButton = document.getElementById("chatButtonid");
let statusButton =document.getElementById("statusButtonid")
let callButton = document.getElementById("callButtonid");
chartContainer.style.display = "none"
statusContainer.style.display=  "none"
callsContainer.style.display = "block"
chatButton.style.textDecoration = "none"
statusButton.style.textDecoration = "none"
callButton.style.textDecoration = "underline"
chatButton.style.color =  "#455A64"
statusButton.style.color =  "#455A64"
callButton.style.color =  "blue"
}