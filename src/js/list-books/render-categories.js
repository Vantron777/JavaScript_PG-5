import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function renderOneBook(books) {
  const booksRendered = books
    .map(el => {
      const { _id, book_image, title, author } = el;
      return `<li class="books-box-itm" id="${_id}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${book_image}"
                alt="${title}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${_id}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${title}</p>
              <p class="books-box-desc-author">${author}</p>
            </div> 
            </li>`;
    })
    .join('');

  return booksRendered;
}

export const renderTopBooks = (data, booksPerRow) => {
  if (!data || data.length === 0) {
    showError('Sorry, books not found');
    return;
  } else {
    const categoriesTopBooks = data
      .map(el => {
        const categoryName = el.list_name;
        const books = renderOneBook(el.books.slice(0, booksPerRow));
        return `<div class="books-box-holder">
        <h3 class="books-box-subtitle">${categoryName}</h3>
         <ul class="books-box-list">${books}</ul>
           <button data-categoryName="${categoryName}" class="books-btn-see-more" type="button">see more</button>
      </div>`;
      })
      .join('');

    return `<h2 class="books-box-title">Best Sellers <span class="books-title-span"> Books</span></h2>${categoriesTopBooks}`;
  }
};

export const renderCategoriesList = data => {
  const categoriesItems = data
    .sort((a, b) => {
      if (a.list_name < b.list_name) {
        return -1;
      }
      if (a.list_name > b.list_name) {
        return 1;
      }
      return 0;
    })
    .map(el => {
      return `<li class="categories-itm"><a href="#" data-categoryName="${el.list_name}">${el.list_name}</a></li>`;
    })
    .join('');

  return ` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${categoriesItems}`;
};

export const renderBooksByCategory = (data, categoryName) => {
  if (!data || data.length === 0) {
    showError('Sorry, category of book not found');
    return;
  } else {
    const books = renderOneBook(data);
    const categoryWords = categoryName.split(' ');

    const lastWord = categoryWords[categoryWords.length - 1];
    const categoryHtml = `<h2 class="books-box-title">
   ${categoryWords.slice(0, -1).join(' ')} 
   <span class="books-title-span">${lastWord}</span>
 </h2>
 <div class="books-category-box">
   <ul class="books-category-list">${books}</ul>
 </div>`;
    return categoryHtml;
  }
};

function showError(msg) {
  iziToast.error({
    message: msg,
    messageColor: 'white',
    backgroundColor: 'red',
    position: 'topRight',
  });
}
