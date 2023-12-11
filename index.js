const img = document.getElementById('top-img');

window.addEventListener('load', function () {
    if (window.innerWidth < 900) {
        img.setAttribute('src', 'images/image-product-mobile.jpg' )
    } else {
        img.setAttribute('src', 'images/image-product-desktop.jpg')
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth < 900) {
        img.setAttribute('src', 'images/image-product-mobile.jpg' )
    } else {
        img.setAttribute('src', 'images/image-product-desktop.jpg')
    }
})

const button = document.querySelector('button');
button.addEventListener('mouseover', function () {
    button.style.cursor = 'pointer';
})
button.addEventListener('mouseenter', function(){
    button.classList.add('button-active');
})
button.addEventListener('mouseleave', function(){
    button.classList.remove('button-active');
})

