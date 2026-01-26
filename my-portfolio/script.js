const jumbotron = document.querySelector(".jumbotron");
const mainContent = document.querySelector(".main-content"); 

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  let bgOpacity;
  if (scrollY < vh) {
    bgOpacity = 1 - (scrollY / (vh * 0.8));
  } else if (scrollY >= vh && scrollY < vh * 1.8) {
    bgOpacity = 0;
  } else {
    bgOpacity = (scrollY - vh * 1.8) / (vh * 0.5);
  }
  jumbotron.style.opacity = Math.min(Math.max(bgOpacity, 0), 1);

  let textOpacity;
  if (scrollY < vh * 0.5) {
    textOpacity = 1 - (scrollY / (vh * 0.4));
  } else {
    textOpacity = 0;
  }
  mainContent.style.opacity = Math.max(textOpacity, 0);
  
  mainContent.style.pointerEvents = textOpacity <= 0 ? "none" : "all";
});

const track = document.querySelector('.slider-track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const slides = Array.from(track.children);

let currentIndex = 0;

function updateSlider() {
  const amountToMove = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${amountToMove * currentIndex}px)`;

  prevBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentIndex === slides.length - 1 ? "hidden" : "visible";
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});


updateSlider();

