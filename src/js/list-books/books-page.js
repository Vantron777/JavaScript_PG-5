import { getTopBooks, getCategoryList, getBooksByCategory } from './books-API.js'

const booksContainer = document.querySelector('.books-box');
const categoriesListContainer = document.querySelector('.categories-list');

const BOOKS_PER_ROW_MAP = {
    'default': 3,
    'largeScreen': 5,
    'smallScreen': 1
};

// Function to display books
async function showBooks(renderedContent) {
    booksContainer.innerHTML = renderedContent;
    const titleElement = document.querySelector('.books-box-desc-title');
    
    if (titleElement) {
        wrapLastWord(titleElement);
    }
}
// Function to display categories
async function showCategories() {
    const renderedCategories = await getCategoryList();
    categoriesListContainer.innerHTML = renderedCategories;
}

// Function to display top books
export async function showTopBooks() {
    const windowWidth = window.innerWidth;
    const booksPerRow = determineBooksPerRow(windowWidth);
    const renderedTop = await getTopBooks(booksPerRow);
    showBooks(renderedTop);
}

// Function to display books by category
export async function showBooksByCategory(categoryName) {
    const renderedBooks = await getBooksByCategory(categoryName);
    showBooks(renderedBooks);
}

// Function to wrap the last word in the title
function wrapLastWord(titleElement) {
    const textContent = titleElement.textContent.split(" ");
    const lastWord = textContent.pop();
    const updatedContent = textContent.join(" ") + (textContent.length > 0 ? ` <span class="books-title-color">${lastWord}</span>` : lastWord);
    titleElement.innerHTML = updatedContent;
}
// Function to determine the number of books per row based on window width
function determineBooksPerRow(windowWidth) {
    if (windowWidth >= 1440) {
        return BOOKS_PER_ROW_MAP.largeScreen;
    } else if (windowWidth < 768) {
        return BOOKS_PER_ROW_MAP.smallScreen;
    } else {
        return BOOKS_PER_ROW_MAP.default;
    }
}

// Initialize the page
if (booksContainer) {
    showTopBooks();
    showCategories();

    categoriesListContainer.addEventListener('click', handleCategoryClick);
    booksContainer.addEventListener('click', handleSeeMoreClick);
}

// Event handler for category click
function handleCategoryClick(e) {
    e.preventDefault();
    const target = e.target;

    if (target.tagName === 'A') {
        const categoryName = target.dataset.categoryName;

        categoriesListContainer.querySelector('.js-categories-current').classList.remove('js-categories-current');
        target.classList.add('js-categories-current');

        if (categoryName) {
            showBooksByCategory(categoryName);
        } else {
            showTopBooks();
        }
    }
}

// Event handler for "See More" click
function handleSeeMoreClick(e) {
    e.preventDefault();
    const target = e.target;

    if (target.classList.contains('books-btn-see-more')) {
        const categoryName = target.dataset.categoryName;

        categoriesListContainer.querySelector('.js-categories-current').classList.remove('js-categories-current');
        categoriesListContainer.querySelector(`[data-categoryName="${categoryName}"]`).classList.add('js-categories-current');

        showBooksByCategory(categoryName);
    }
}