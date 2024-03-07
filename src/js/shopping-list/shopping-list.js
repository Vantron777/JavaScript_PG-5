import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import amazontabdesk1x from './img/shopping-list/amazon-tabl-desk-1x.png';
import amazontabdesk2x from './img/shopping-list/amazon-tabl-desk-2x.png';
import amazonmob1x from './img/shopping-list/amazon-mob-1x.png';
import appletabdesk1x from './img/shopping-list/apple-books-tabl-desk-1x.png';
import appletabdesk2x from './img/shopping-list/apple-books-tabl-desk-2x.png';
import applemob1x from './img/shopping-list/apple-books-mob-1x.png';
import sprite from './img/sprite.svg';
import empytabdesk1x from './img/shopping-list/empy-books-tab-desk-1x.png';
import empytabdesk2x from './img/shopping-list/empy-books-tab-desk-2x.png';
import emptymob from './img/shopping-list/empty-books-mob.png';

const shopTitle = document.querySelector('.shopping-list-title');

function queryLocalStorage() {
  return JSON.parse(localStorage.getItem('addBook'));
}

function rendMarkup(elements) {
  removeEmptyMarkup();
  const markup = queryLocalStorage()
    .map(book => {
      return `<li class="shoppinglist-book" id="${book._id}">
          <img
            class="shoppinglist-book-image"
            src="${book.book_image}"
            alt="book image"
            width="100"
            height="142"
          /><div class="shoppinglist-cart-content">
            <h3 class="shoppinglist-book-title">${book.title}</h3>
            <p class="shoppinglist-book-category">${book.list_name}</p>
            <p class="shoppinglist-book-description">${book.description}</p><div class="shoppinglist-low-div">
              <p class="shoppinglist-book-author">${book.author}</p>
              <ul class="shoppinglist-book-low-ul">
                <li class="shoppinglist-book-low-li-amazon">
                  <a
                    class="shopping-amazon-link"
                    href="${book.amazon_product_url}"
                    target="_blank"
                  >
                    <img
                      class="shopping-listamazon-img"
                      srcset="${amazontabdesk1x} 1x, ${amazontabdesk2x} 2x"
                      src="${amazonmob1x}"
                      alt="logoAmazon"
                      width="32"
                      height="11"
                    />
                  </a>
                </li>
                <li class="shoppinglist-book-low-li-apple">
                  <a
                    class="shopping-apple-link"
                    href="${book.buy_links[1].url}"
                    target="_blank"
                  >
                    <img
                      class="shopping-apple-img"
                      srcset="${appletabdesk1x} 1x, ${appletabdesk2x} 2x"
                      src="${applemob1x}"
                      alt="logo Apple books"
                      width="16"
                      height="16"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="shoppinglist-book-deletebutton">
              <svg class="shoppinglist-btn-svg" width="18" height="18">
                <use href="${sprite}#icon-trash_bin"></use>
              </svg>
            </button>
          </div>
        </li>`;
    })
    .join('');

  shopTitle.insertAdjacentHTML(
    'afterend',
    `<div class="shopinglist-cart"><ul class="shoppinglist-list"></ul></div>`
  );
  document.querySelector('.shoppinglist-list').innerHTML = markup;
}

function addEmptyMarkup() {
  if (document.querySelector('.shoppinglist-list')) {
    document.querySelector('.shoppinglist-list').remove();
  }
  removeEmptyMarkup();

  const emptyMarkup = `<p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      srcset="${empytabdesk1x} 1x, ${empytabdesk2x} 2x"
      class="shopping-list-img"
      src="${emptymob}"
      alt="a lot of books"
    />`;
  shopTitle.insertAdjacentHTML('afterend', emptyMarkup);
  iziToast.info({
    message: 'The list of books is empty.',
    timeout: 3000,
    position: 'topRight',
  });
}

function removeEmptyMarkup() {
  if (document.querySelector('.shopping-list-img')) {
    document.querySelector('.shopping-list-img').remove();
    document.querySelector('.shopping-list-text').remove();
  }
}

document.querySelector('.shopping-list').addEventListener('click', event => {
  if (event.target.nodeName == 'BUTTON') {
    const bookId = event.target.closest('li').getAttribute('id');
    console.log(bookId);
    const newArray = queryLocalStorage().filter(obj => obj._id !== bookId);
    addtoLS(newArray);
    const deleteElementLi = document.querySelector(`li[id="${bookId}"]`);
    deleteElementLi.remove();
  }
  if (!queryLocalStorage() || queryLocalStorage().length === 0) {
    addEmptyMarkup();
  }
});

if (queryLocalStorage() && queryLocalStorage().length > 0) {
  rendMarkup(queryLocalStorage());
} else {
  addEmptyMarkup();
}
