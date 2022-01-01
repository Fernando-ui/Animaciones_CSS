let images = Array.from(document.querySelectorAll('img'));

let imagesScrollTop = images.map( image => 
    image.getBoundingClientRect().top
    
)

console.log(imagesScrollTop);