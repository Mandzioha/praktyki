'use strict';

// TEST
let text_container = document.querySelector("h1");
let button = document.querySelector("#welcome-button");
let text = text_container.innerHTML;
let clicked = 0;
button.addEventListener("click", ()=>{
    clicked%2 === 0 ? text_container.innerHTML ="Będzie pan zadowolony ;)" : text_container.innerHTML = text;
    clicked++;
});