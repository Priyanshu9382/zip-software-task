document.querySelector("#hamburger").addEventListener("click", ()=>{
    document.querySelector(".hamburger").style.left = "0" + "%";
})
document.querySelector(".cross").addEventListener("click", ()=>{
    document.querySelector(".hamburger").style.left = "-500" + "%";
})