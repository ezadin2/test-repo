const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}
function showMore() {
    var additionalText = document.getElementById("additionalText");
    var readMoreButton = document.querySelector(".btn");

    if (additionalText.style.display === "none" || additionalText.style.display === "") {
        additionalText.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        additionalText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
}

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var bodyHeight = document.body.offsetHeight;

    if (scrollPosition > bodyHeight - windowHeight - 100) {
        footer.style.transform = "translateY(0)";
    } else {
        footer.style.transform = "translateY(100%)";
    }
});
