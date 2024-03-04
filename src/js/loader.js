window.addEventListener('load', () => {
  setTimeout(() => {
    hideLoader();
  }, 350);
});

const loaderContainer = document.querySelector('.loader');

export function showLoader() {
  loaderContainer.classList.remove('visually-hidden');
}

export function hideLoader() {
  loaderContainer.classList.add('visually-hidden');
}

showLoader();
