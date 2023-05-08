'use strict';

let text_container = document.querySelector("h1");
let button = document.querySelector("#welcome-button");
let text = text_container.innerHTML;
let clicked;
button.addEventListener("click", ()=>{
    if(clicked == true){
        text_container.innerHTML = text;
        clicked = false;
    }else{
        text_container.innerHTML ="Będzie pan zadowolony ;)";
        clicked = true;  
    }
});