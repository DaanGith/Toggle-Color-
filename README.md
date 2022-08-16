# Toggle-Color-
Assignment JS

- 16-8-22. added functions in index en in script

index: onmouseenter="showNav()" onmouseleave="closeNav()"

script: 

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
    

