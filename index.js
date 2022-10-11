let index = 0;
let i = 0;
let slider = document.getElementsByClassName("slider");

auto();

function show(n) {
    for (i = 0; i < slider.length; i++){
        slider[i].style.display = "none";
    }
    slider[n-1].style.display = ("block");
}

function auto(){
    index++;
    if(index > slider.length){ // to move from last slide to first
        index = 1;
    }
    show(index); //Calling Now 
    setTimeout(auto, 5000); // next slide will appear after given seconds

}

function plusSlide(n){
    index += n;
    if(index < slider.length){
        index = 1;

    }
    if (index < 1){
        index = slider.length;

    }
    show(index);
    
}


let sl1 = document.getElementById("sub1-list");
let sl2 = document.getElementById("sub2-list");
let sl3 = document.getElementById("sub3-list");
let sl4 = document.getElementById("sub4-list");
let sl5 = document.getElementById("sub5-list");
let sl6 = document.getElementById("sub6-list");


    function toggleMenu(myVar){
        myVar.style.display = "block";
        
    } 
    function revToggle(myVar){
        myVar.style.display = "none";
    }   
            
let navElem1 = document.getElementById("nav-item1");

navElem1.addEventListener("mouseover", function(){toggleMenu(sl1)});
navElem1.addEventListener("mouseout", function(){revToggle(sl1)})

sl1.addEventListener("mouseover", function(){toggleMenu(sl1)});
sl1.addEventListener("mouseout", function(){revToggle(sl1)});



let navElem2 = document.getElementById("nav-item2")

navElem2.addEventListener("mouseover", function(){toggleMenu(sl2)});
navElem2.addEventListener("mouseout", function(){revToggle(sl2)})

sl2.addEventListener("mouseover", function(){toggleMenu(sl2)});
sl2.addEventListener("mouseout", function(){revToggle(sl2)});



let navElem3 = document.getElementById("nav-item3")

navElem3.addEventListener("mouseover", function(){toggleMenu(sl3)});
navElem3.addEventListener("mouseout", function(){revToggle(sl3)})

sl3.addEventListener("mouseover", function(){toggleMenu(sl3)});
sl3.addEventListener("mouseout", function(){revToggle(sl3)});



let navElem4 = document.getElementById("nav-item4")

navElem4.addEventListener("mouseover", function(){toggleMenu(sl4)});
navElem4.addEventListener("mouseout", function(){revToggle(sl4)})

sl4.addEventListener("mouseover", function(){toggleMenu(sl4)});
sl4.addEventListener("mouseout", function(){revToggle(sl4)});



let navElem5 = document.getElementById("nav-item5")

navElem5.addEventListener("mouseover", function(){toggleMenu(sl5)});
navElem5.addEventListener("mouseout", function(){revToggle(sl5)})

sl5.addEventListener("mouseover", function(){toggleMenu(sl5)});
sl5.addEventListener("mouseout", function(){revToggle(sl5)});



let navElem6 = document.getElementById("nav-item6")

navElem6.addEventListener("mouseover", function(){toggleMenu(sl6)});
navElem6.addEventListener("mouseout", function(){revToggle(sl6)})

sl6.addEventListener("mouseover", function(){toggleMenu(sl6)});
sl6.addEventListener("mouseout", function(){revToggle(sl6)});



let menuTab = document.getElementById("menuTab");
menuTab.style.height = "0px";
menuTab.style.width = "0px";

function expandMenu(){
    menuTab.style.display = "inline-block"
    menuTab.style.height = "100vh";
    menuTab.style.width = "310px";
 
}

function closeNav(){
    menuTab.style.width = "0px"
    menuTab.style.height  = "0px"
    menuTab.style.display = "none"
}

