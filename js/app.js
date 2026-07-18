window.addEventListener("load",()=>{setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.style.display="none",500)},1500);});
window.addEventListener("scroll",()=>{
const h=document.getElementById("header");
if(scrollY>60){h.style.position="fixed";h.style.top="0";h.style.background="rgba(15,91,70,.92)";}
else{h.style.position="absolute";h.style.top="40px";h.style.background="transparent";}
});
