let hambergIcon = document.getElementById("hambergIcon");
let mobileLinks = document.getElementById("mobileLinks");
console.log(hambergIcon);

hambergIcon.onclick = function(){
    mobileLinks.style.marginTop = "100px";
    mobileLinks.classList.toggle("mobile-links");
}