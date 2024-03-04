//Render one book
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
//Render top books
export const renderTopBooks = (data, booksPerRow) => {
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

  return `<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${categoriesTopBooks}</div>`;
};
//Render categories
export const renderCategoriesList = data => {
  const categoriesItems = data
    .map(el => {
      return `<li class="categories-itm"><a href="#" data-categoryName="${el.list_name}">${el.list_name}</a></li>`;
    })
    .join('');

  return `<li class="categories-itm js-categories-current "><a href="#" data-categoryName="">All categories</a></li>${categoriesItems}`;
};
//Render category books
export const renderBooksByCategory = data => {
  const categoryMarkup = data
    .map(el => {
      const books = renderOneBook(el);
      return `<div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${el.list_name}</h2>
      <ul class="books-category-list">${books}</ul>
    </div>`;
    }).join('');

  return categoryMarkup;
};