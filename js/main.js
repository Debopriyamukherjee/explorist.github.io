
window.onscroll=function(){
    scroll();
}


function scroll(){
     
    if(document.documentElement.scrollTop > 100)
    {
        document.getElementById("head").style.backgroundColor = "#000000ee";
        document.getElementById("logo").style.padding = "10px";
        document.getElementById("nav").style.padding = "20px";
        document.getElementById("burgermenu").style.padding = "20px";
       
    }
    else
    {
        document.getElementById("head").style.backgroundColor = "#00000000";
        document.getElementById("logo").style.padding = "30px";
        document.getElementById("nav").style.padding = "35px";
        document.getElementById("burgermenu").style.padding = "25px";
    }
    
}