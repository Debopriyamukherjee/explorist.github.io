
window.onscroll=function(){
    scroll();
}


function scroll(){
     
    if(document.documentElement.scrollTop > 100)
    {
        document.getElementById("head").style.backgroundColor = "#000000ee";
        document.getElementById("logo").style.width = "20%";
        document.getElementById("logo").style.padding = "10px";
        document.getElementById("nav").style.padding = "10px";
        document.getElementById("color").style.color="#fff";
        document.getElementById("color1").style.color="#fff";
        document.getElementById("color2").style.color="#fff";
        document.getElementById("color3").style.color="#fff";
       
    }
    else
    {
        document.getElementById("head").style.backgroundColor = "#00000000";
        document.getElementById("logo").style.width = "30%";
        document.getElementById("logo").style.padding = "25px";
        document.getElementById("nav").style.padding = "30px";
        document.getElementById("color").style.color="#000";
        document.getElementById("color1").style.color="#000";
        document.getElementById("color2").style.color="#000";
        document.getElementById("color3").style.color="#000";
    }
    
}