const images=[
    "images/Slide1.jpg",
    "images/Slide2.jpg",
    "images/Slide3.jpg",
    "images/Slide4.jpg",
    "images/Slide5.jpg",
    "images/Slide6.jpg",
    "images/Slide7.jpg",
    "images/Slide8.jpg",
];

let currentIndex=0;

function nextImage(){
    currentIndex=(currentIndex+1)%images.length;
    document.getElementById("slideImage").src=images[currentIndex];
}

function prevImage(){
    currentIndex=(currentIndex-1+images.length)%images.length;
    document.getElementById("slideImage").src=images[currentIndex];
}

document.querySelector(".slide-left-btn").addEventListener("click",prevImage);
document.querySelector(".slide-right-btn").addEventListener("click", nextImage);
