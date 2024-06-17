const sidebar =document.querySelector(".sidebar");
const btnOpenSidebar=document.querySelector("#btn-open-sidebar")
const btnCloseSidebar=document.querySelector("#btn-close-sidebar")


btnOpenSidebar.addEventListener("click",function(){
    sidebar.style.display="block"
})
btnCloseSidebar.addEventListener("click",function(){
    if(window.innerWidth <= 768){
        sidebar.style.display="none";

    }
})

