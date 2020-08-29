var parallax = document.querySelector('.parallax');

function scrollParallax(){
    var scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY('+ scrollTop * -0.5 + 'px)';
}

function sayHello(){
 console.log("Hola mundo");
}

window.addEventListener('scroll', scrollParallax);