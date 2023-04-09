const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
var MainImg = document.getElementById("Mainimg");


function ripple(id) {
    var pusy = document.getElementById(id);
    MainImg.src = pusy.src;

}

function toggle(){
    let cunt=window.getComputedStyle(document.querySelector('#navbar')).width;
    if(cunt=="300px"){
        nav.style.width="480px";
    }
    else{
        nav.style.width="300px";
    }
}




function decide_state(){
    let fuddi = sessionStorage.getItem("state");

    if(fuddi == "dark"){
       mode();
    }

}

var icon =  document.getElementById("icon");

function mode(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        sessionStorage.setItem("state", "dark");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}


