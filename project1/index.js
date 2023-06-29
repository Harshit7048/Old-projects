
let homemain = document.querySelector('#text-home ')
let nav = document.querySelector('nav')
let whey = document.querySelector('#whey')

// let home2cards = document.querySelectorAll('.home-child-cards')

let homecard1 = document.getElementById('home-2-card-1')
let homecard2 = document.getElementById('home-2-card-2')
let homecard3 = document.getElementById('home-2-card-3')

let home2child = document.getElementById('home-2-child')

let home2cardimage1 = document.getElementById('home-2-cards-img-1')
let home2cardimage2 = document.getElementById('home-2-cards-img-2')
let home2cardimage3 = document.getElementById('home-2-cards-img-3')

let home2childimg = document.getElementById('home-2-child-img')

let form = document.getElementById('buy-form')
let home4img = document.getElementById('home-4-img')

let scrol = 1;

window.addEventListener('load', () => {
    setTimeout(() => {

        homemain.classList.add('bottom-up')

        nav.classList.add('top-down')
        whey.classList.add('whey-left-original')

    }, 1000);
})

window.addEventListener('scroll', function () {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    // Manipulate the element's position based on the scroll position
    if (scrollTop > 600) {
        scrol = 2;
        setTimeout(() => {
            home2child.classList.add('home-2-left-original')
            home2childimg.classList.add('home-2-child-img-right-original')

            // whey.style.height = '600px'
        }, 500);



    } else {
        setTimeout(() => {
            whey.style.height = '400px'
        }, 500);

    }

    if (scrol !== 2) {
        setTimeout(() => {
            // whey.style.top = '15vh';
            // whey.style.left = '35%';
        }, 500);

        // whey.style.transform = 'rotate(0deg)'


    } else {
        setTimeout(() => {
            // whey.style.top = scrollTop + 'px';
            // whey.style.left = '65%';
            // whey.classList.add('whey-size-bigger')

        }, 500);


    }

    if (scrollTop < 100) {
        setTimeout(() => {
            // whey.style.top = '15vh';
            // whey.style.left = '35%'
        }, 500);

    }

    if (scrollTop > 1264) {
        setTimeout(() => {
            // whey.style.left = '35%'
            // whey.style.height = '400px'
            // whey.style.top = scrollTop + 200 + 'px';
        }, 500);


    }


    if (scrollTop > 1764) {
        setTimeout(() => {
            form.classList.add('form-right-original')
            home4img.classList.add('home-4-img-left-original')
        }, 500);


    }


});

// var viewportHeight = window.innerHeight;
// var scrollValue = viewportHeight;
// console.log(scrollValue);

homecard1.addEventListener('mouseover', () => {
    homecard1.classList.add('home-card-active')
    homecard2.classList.remove('home-card-active')
    homecard3.classList.remove('home-card-active')
    home2cardimage1.classList.add('home-2-card-opacity')
    home2cardimage2.classList.add('home-2-card-opacity')
    home2cardimage1.classList.remove('home-2-card-opacity')


})
homecard2.addEventListener('mouseover', () => {
    homecard2.classList.add('home-card-active')
    homecard1.classList.remove('home-card-active')
    homecard3.classList.remove('home-card-active')
    home2cardimage1.classList.add('home-2-card-opacity')
    home2cardimage3.classList.add('home-2-card-opacity')
    home2cardimage2.classList.remove('home-2-card-opacity')




})
homecard3.addEventListener('mouseover', () => {
    homecard3.classList.add('home-card-active')
    homecard2.classList.remove('home-card-active')
    homecard1.classList.remove('home-card-active')
    home2cardimage2.classList.add('home-2-card-opacity')
    home2cardimage1.classList.add('home-2-card-opacity')
    home2cardimage3.classList.remove('home-2-card-opacity')



})
