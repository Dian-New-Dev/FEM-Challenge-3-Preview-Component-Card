const img = document.getElementById('top-img');
window.addEventListener('resize', function () {
    if (window.innerWidth < 900) {
        img.setAttribute('src', 'images/image-product-mobile.jpg' )
    } else {
        img.setAttribute('src', 'images/image-product-desktop.jpg')
    }
})
