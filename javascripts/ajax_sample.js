let number = 0; //--1
const titleArea = document.getElementById("title"); //--2
const contentArea = document.getElementById("content"); //--2
const videoArea = document.getElementById("video"); //--2
const button = document.getElementById('btn'); //--3
let newArray = [];

function getData() {
     const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
            newArray = request.response;
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
}

function changeVideo(){
        button.addEventListener('click', e=>{
        titleArea.innerHTML = newArray[number].title; 
        contentArea.innerHTML = newArray[number].content; 
        videoArea.setAttribute("src", newArray[number].url); 
        number == 2 ? number = 0 : number++;
    })
}

window.onload = getData;
changeVideo();