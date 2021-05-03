
let menulist = document.getElementById("menu");
menulist.style.maxHeight = "0px";


//Mobile nav
function opMenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "130px";
    }else{
       menulist.style.maxHeight = "0px";
    }
}