var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 6000);
var pauseButton = document.getElementById('pause');
var playing = true;

var textOfTheSliderContainer = document.getElementById('text-of-the-slide');
var textOfTheSlide = ["White Zone", "Gray Zone", "Red Zone", "Blue Zone", "Meeting Room", "Event Hall"];

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function pauseSlideshow() {
    pauseButton.innerHTML = '<i class="fas fa-play"></i>';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    playing = true;
    slideInterval = setInterval(nextSlide, 6000);
}

pauseButton.onclick = function() {
    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};

setInterval(function() {
    if (currentSlide == 0) {
        textOfTheSliderContainer.innerHTML = textOfTheSlide[0];
    } else if (currentSlide == 1) {
        textOfTheSliderContainer.innerHTML = textOfTheSlide[1];
    } else if (currentSlide == 2) {
        textOfTheSliderContainer.innerHTML = textOfTheSlide[2];
    } else if (currentSlide == 3) {
        textOfTheSliderContainer.innerHTML = textOfTheSlide[3];
    } else if (currentSlide == 4) {
        textOfTheSliderContainer.innerHTML = textOfTheSlide[4];
    } else if (currentSlide == 5) {
        textOfTheSliderContainer.innerHTML = textOfTheSlide[5];
    } else {
        console.log("Ошибка");
    }
}, 100);

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}