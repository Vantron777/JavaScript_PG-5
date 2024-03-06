import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
          />
          <div class="shoppinglist-total-div">
            <div class="shoppinglist-tb-div">
              <div class="shoppinglist-titcat-div">
                <h3 class="shoppinglist-book-title">${book.title}</h3>
                <p class="shoppinglist-book-category">${book.list_name}</p>
              </div>

              <button
                type="button"
                class="shoppinglist-book-deletebutton"
              ></button>
            </div>

            <div class="shoppinglist-desauthorlink">
              <p class="shoppinglist-book-description">${book.description}</p>

              <div class="shoppinglist-low-div">
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
                        src="./img/amazon.png"
                        alt="logoAmazon"
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
                        src="./img/apple.png"
                        alt="logo Apple books"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>`;
    })
    .join('');
  shopTitle.insertAdjacentHTML('afterend', `<ul class="books"></ul>`);
  document.querySelector('.books').innerHTML = markup;
}

function addEmptyMarkup() {
  if (document.querySelector('.books')) {
    document.querySelector('.books').remove();
  }

  const emptyMarkup = `<p class="shopping-list-text">
            This page is empty, add some books and proceed to order.
          </p>
              <img
                class="shopping-list-img"
                src="./img/books.png"
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
  event.preventDefault();
  if (event.target.nodeName == 'BUTTON') {
    const bookId = event.target.closest('li').getAttribute('id');
    console.log(bookId);
    const newArray = queryLocalStorage().filter(obj => obj._id !== bookId);
    addtoLS(newArray);
    const deleteElementLi = document.querySelector(`li[id="${bookId}"]`);
    deleteElementLi.remove();
  }
  if (queryLocalStorage().length === 0) {
    addEmptyMarkup();
  }
});

if (queryLocalStorage() && queryLocalStorage().length > 0) {
  rendMarkup(queryLocalStorage());
} else {
  addEmptyMarkup();
}
