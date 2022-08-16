let toggleNavStatus = false; 

//const rtnBtn = document.querySelector("rtn-btn");
const getSidebar = document.querySelector(".nav-sidebar");
const getSidebarUl = document.querySelector(".nav-sidebar ul");
const getSidebarTitle = document.querySelector(".nav-sidebar span");
const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

const redBtn = document.querySelector("#red-btn");
const orangeBtn = document.querySelector("#orange-btn");
const purpleBtn = document.querySelector("#purple-btn");
const yellowBtn = document.querySelector("#yellow-btn");
const bluedBtn = document.querySelector("#blue-btn");
const greenBtn = document.querySelector("#green-btn");

const menuBtn = document.querySelector(".btn-toggle-nav");
const getBgColorElement = document.querySelectorAll(".bgcolor");
const bodyElement = document.body;



/*menuBtn.addEventListener("click" , function() {
    showNav();
});*/
   
//Function open en close
//Open

    let showNav = () => {
    
        if (toggleNavStatus === false);
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length; 
        for (let i= 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;  
    }
    
    //close 

    let closeNav = () => {

    if (toggleNavStatus === true); 
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length; 
        for (let i= 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
    

//addEvent

/*rtnBtn.addEventListener("click" , () => {
    document.body.style.background = "white";
});*/

menuBtn.addEventListener("onmouseenter" , function(){
    showNav();
});

menuBtn.addEventListener("onmouseleave" , function() {
    closeNav();
});

redBtn.addEventListener("click" , () =>  {
    document.body.style.background = "red"; closeNav();

});

orangeBtn.addEventListener("click" , () =>  {
    document.body.style.background = "orange"; closeNav();
});

purpleBtn.addEventListener("click" , () =>  {
    document.body.style.background = "purple"; closeNav();
});

yellowBtn.addEventListener("click" , () =>  {
    document.body.style.background = "yellow"; closeNav();
});

bluedBtn.addEventListener("click" , () =>  {
    document.body.style.background = "blue"; closeNav();
});

greenBtn.addEventListener("click" , () =>  {
    document.body.style.background = "green"; closeNav();

});
