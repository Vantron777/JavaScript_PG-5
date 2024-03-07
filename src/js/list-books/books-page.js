// import { showLoader, hideLoader } from '../loader';

import {
  getTopBooks,
  getCategoryList,
  getBooksByCategory,
} from './books-API.js';
import { openModal } from "../shopping-list/modal.js";
//function determine Books PerRow
const BOOKS_PER_ROW_MAP = {
  default: 3,
  largeScreen: 5,
  smallScreen: 1,
};

function determineBooksPerRow(windowWidth) {
  if (windowWidth >= 1440) {
    return BOOKS_PER_ROW_MAP.largeScreen;
  } else if (windowWidth < 768) {
    return BOOKS_PER_ROW_MAP.smallScreen;
  } else {
    return BOOKS_PER_ROW_MAP.default;
  }
}

const windowWidthStart = window.innerWidth;
let ctrlBreikpoint = determineBooksPerRow(windowWidthStart);

window.addEventListener('resize', () => {
  const newWindowWidth = window.innerWidth;
  ctrlBreikpoint = determineBooksPerRow(newWindowWidth);
});

//function show category
async function displayCategories() {
//   showLoader();
  const categoriesContainer = document.querySelector('.categories-list');
  const renderedCategories = await getCategoryList();
  categoriesContainer.innerHTML = renderedCategories;
  categoriesContainer.addEventListener('click', handleCategoryClick);
//   hideLoader();
  return categoriesContainer;
}

async function handleCategoryClick(e) {
  e.preventDefault();

  const target = e.target;
  const catItem = target.closest('.categories-itm');
  if (!catItem) {
    return;
  }

  const catName = target.dataset.categoryname;

  const categoriesContainer = await displayCategories();
  updateCategoryClasses(categoriesContainer, catName);
// showLoader();
  
  if (catName === 'all categories') {
    displayTopBooks();
  } else {
    await displayBooksByCategory(categoriesContainer, catName);
  }
}

//button see more
document.addEventListener('click', handleSeeMoreClick);
async function handleSeeMoreClick(event) {
  if (event.target && event.target.classList.contains('books-btn-see-more')) {
    const catName = event.target.dataset.categoryname;
//   showLoader(); 
    await displayBooksByCategory(null, catName);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const categoriesContainer = await displayCategories();
    updateCategoryClasses(categoriesContainer, catName);
  }
}

// show books by category
async function displayBooksByCategory(categoriesContainer, catName) {
//   showLoader();
  try {
    const booksContainer = document.querySelector('.books-box');
    if (!booksContainer) {
      console.error('Element not found.');
      return;
    }
      const renderedBooks = await getBooksByCategory(catName);
     booksContainer.innerHTML = renderedBooks;
    
    // console.log(renderedBooks);
  } catch (error) {
    console.error('Error displaying books by category:', error);
  } finally {
    // hideLoader();
  }
}

//show best sellers books
async function displayTopBooks() {
  try {
    // showLoader();
    const topBooksContainer = document.querySelector('.books-box');
     const newWindowWidth = window.innerWidth;
      ctrlBreikpoint = determineBooksPerRow(newWindowWidth);
    const booksPerRow = ctrlBreikpoint;
    const renderedBooks = await getTopBooks(booksPerRow);

    topBooksContainer.innerHTML = renderedBooks;
    
  } catch (error) {
    console.error('Error displaying top books:', error);
  } finally {
    // hideLoader();
  }
}


window.addEventListener('load', () => {
  displayTopBooks();
  displayCategories();
});

//function update category classes categories-itm
function updateCategoryClasses(categoriesContainer, catName) {
  const categoriesItems =
    categoriesContainer.querySelectorAll('.categories-itm');
  categoriesItems.forEach(item => {
    if (item.firstElementChild.dataset.categoryname === catName) {
      item.classList.add('js-categories-current');
    } else {
      item.classList.remove('js-categories-current');
    }
  });
}

document.addEventListener('DOMContentLoaded', async function () {
  const bookItems = document.querySelectorAll('.books-box-list');
  console.log(bookItems);

   bookItems.forEach(bookItem => {
    console.log(bookItem);
    if (bookItem.classList.contains('.books-box-itm')) {
      bookItem.addEventListener('click', () => {
        const bookId = bookItem.id;
        console.log('Click');
        openModal(bookId);
      });
    } else {
      console.error('Error: Element does not have class "books-box-itm"');
    }
  });
});



