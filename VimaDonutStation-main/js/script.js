let searchForm = document.querySelector('.search-form-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}*/

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}   */

function changeImg(anything){ 
    document.querySelector('.home-img').src = anything;
}



document.getElementById('dark-mode').onclick = () => { 
    document.body.classList.toggle('dark')
}


 /*document.querySelector('.showi').onclick = () => { 
    const frame = document.querySelector('.frame').setAttribute(src, " ");
} */