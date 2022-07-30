let toggleNavStatus = false; 

//const rtnBtn = document.querySelector("rtn-btn");
const redBtn = document.querySelector("#red-btn");
const orangeBtn = document.querySelector("#orange-btn");
const purpleBtn = document.querySelector("#purple-btn");
const yellowBtn = document.querySelector("#yellow-btn");
const bluedBtn = document.querySelector("#blue-btn");
const greenBtn = document.querySelector("#green-btn");

const bodyElement = document.body;



//Function onclick open en dicht
let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length; 
        for (let i= 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;

    }
    
    else if (toggleNavStatus === true) {
        
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length; 
        for (let i= 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;

    }
}


//addEvent

/*rtnBtn.addEventListener("click" , () => {
    document.body.style.background = "white";
});*/

redBtn.addEventListener("click" , () =>  {
    document.body.style.background = "red";
});

orangeBtn.addEventListener("click" , () =>  {
    document.body.style.background = "orange";
});

purpleBtn.addEventListener("click" , () =>  {
    document.body.style.background = "purple";
});

yellowBtn.addEventListener("click" , () =>  {
    document.body.style.background = "yellow";
});

bluedBtn.addEventListener("click" , () =>  {
    document.body.style.background = "blue";
});

greenBtn.addEventListener("click" , () =>  {
    document.body.style.background = "green";

});

