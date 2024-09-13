/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0
  

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel'); // Get the carousel element
  let isDown = false;  // Track if the user is dragging
  let startX = 0;  // Initial X position when dragging starts
  let scrollLeft = 0;  // Initial scroll position when dragging starts

  // Mouse down event to start dragging
  carousel.addEventListener('mousedown', (event) => {
    isDown = true;  // Set dragging flag
    carousel.classList.add('active');  // Optional: Add a class to indicate active dragging
    startX = event.pageX - carousel.offsetLeft;  // Store initial X position
    scrollLeft = carousel.scrollLeft;  // Store initial scroll position
  });

  // Mouse leave event to stop dragging
  carousel.addEventListener('mouseleave', () => {
    isDown = false;  // Reset dragging flag
    carousel.classList.remove('active');  // Optional: Remove active class
  });

  // Mouse up event to stop dragging
  carousel.addEventListener('mouseup', () => {
    isDown = false;  // Reset dragging flag
    carousel.classList.remove('active');  // Optional: Remove active class
    snapToSlide(); // Snap to the closest slide after dragging
  });

  // Mouse move event to drag the carousel
  carousel.addEventListener('mousemove', (event) => {
    if (!isDown) return; // Only run if dragging
    event.preventDefault();
    const x = event.pageX - carousel.offsetLeft;  // Calculate current X position
    const walk = (x - startX) * 2;  // Calculate distance to scroll
    carousel.scrollLeft = scrollLeft - walk;  // Set new scroll position
  });

  // Touch start event for touch devices
  carousel.addEventListener('touchstart', (event) => {
    isDown = true;  // Set dragging flag
    startX = event.touches[0].pageX - carousel.offsetLeft;  // Store initial X position for touch
    scrollLeft = carousel.scrollLeft;  // Store initial scroll position
  });

  // Touch end event to stop dragging
  carousel.addEventListener('touchend', () => {
    isDown = false;  // Reset dragging flag
    snapToSlide(); // Snap to the closest slide after dragging
  });

  // Touch move event to drag the carousel
  carousel.addEventListener('touchmove', (event) => {
    if (!isDown) return;  // Only run if dragging
    const x = event.touches[0].pageX - carousel.offsetLeft;  // Calculate current X position for touch
    const walk = (x - startX) * 2;  // Calculate distance to scroll
    carousel.scrollLeft = scrollLeft - walk;  // Set new scroll position
  });

  // Function to snap to the closest slide
  function snapToSlide() {
    const slideWidth = carousel.clientWidth;  // Get the width of each slide
    const scrollPosition = carousel.scrollLeft;  // Get the current scroll position
    const closestSlide = Math.round(scrollPosition / slideWidth);  // Calculate the closest slide index
    carousel.scrollTo({
      left: closestSlide * slideWidth,  // Scroll to the closest slide
      behavior: 'smooth'  // Use smooth scrolling
    });
  }
});
