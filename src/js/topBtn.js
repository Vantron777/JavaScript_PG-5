function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const scrollToTopBtn = document.querySelector('.top-btn');
scrollToTopBtn.style.display = 'none';

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    scrollToTopBtn.style.display = 'inline-flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', scrollToTop);
