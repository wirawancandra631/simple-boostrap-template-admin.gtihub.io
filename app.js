(function(){
    const sidebar = document.querySelector(".sidebar");
const btnOpenSidebar = document.querySelector("#btn-open-sidebar")
const btnCloseSidebar = document.querySelector("#btn-close-sidebar")
const mainDashboard = document.querySelector(".main-dashboard");
let statusSidebar="show";

btnOpenSidebar.addEventListener("click", function () {
    if (window.innerWidth > 768) {
        if (statusSidebar == "show") {
            sidebar.style.transform = "translateX(-100%)";
            mainDashboard.style.width = "100%";
            mainDashboard.style.marginLeft = "0"
            statusSidebar="hide"


        }
        else if (statusSidebar == "hide") {
            if (window.innerWidth > 768 && window.innerWidth <= 992) {
                mainDashboard.style.width = "70%";
                mainDashboard.style.marginLeft = "30%"
            }
            else {
                mainDashboard.style.width = "80%";
                mainDashboard.style.marginLeft = "20%"
            }
            sidebar.style.transform = "translateX(0)";
            statusSidebar="show";
        }
    }
    else {
            sidebar.style.transform="translateX(0)";

    }

})
btnCloseSidebar.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
        sidebar.style.transform = "translateX(-100%)"

    }

})


})()