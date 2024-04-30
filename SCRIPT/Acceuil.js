const slides = document.querySelectorAll(".slide");
const auto = true;
const intervalTime = 5000;
let slidesInterval;


const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }

  current.classList.add("transition");
  current.nextElementSibling.classList.add("transition");

  setTimeout(() => {
    current.classList.remove("transition");
    current.nextElementSibling.classList.remove("transition");
  }, 500);

  current.classList.add("blur");
  current.nextElementSibling.classList.add("blur");

  setTimeout(() => {
    current.classList.remove("blur");
    current.nextElementSibling.classList.remove("blur");
  }, 500);
}

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }

  current.classList.add("transition");
  current.previousElementSibling.classList.add("transition");

  setTimeout(() => {
    current.classList.remove("transition");
    current.previousElementSibling.classList.remove("transition");
  }, 500);

  current.classList.add("blur");
  current.previousElementSibling.classList.add("blur");

  setTimeout(() => {
    current.classList.remove("blur");
    current.previousElementSibling.classList.remove("blur");
  }, 500);
};

if (auto) {
  slidesInterval = setInterval(nextSlide, intervalTime);
}

