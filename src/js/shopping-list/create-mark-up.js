import icons from '../../img/sprite.svg';
const LOCAL_STORAGE_KEY = 'addBook';

export function createMarkup(obj) {
  const localStorageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const hasItem =
    localStorageData && localStorageData.some(item => item._id === obj._id);

  return `
      
      <div class="modal-content">
        <button
        class="modal-close-btn modal-close-btn-js"
        type="button">
        <svg class="close-btn" width="16" height="16">
          <use href="${icons}#icon-x-close"></use>
          
        </svg>
      </button>
        <img class="modal-img" src="${
          obj.book_image
        }" alt="cover" width = "192">

        <div class="modal-info">
          <h2 class="modal-title">${obj.list_name}</h2>
          <p class="modal-author">${obj.author}</p>
          <p class="modal-description">${obj.description}</p>

          ${linksTemplate(obj.buy_links)} 
        </div>
      </div>
    
    <div class="modal-buttons">
      <button class="modal-button-shopping-list" type="button" data-id="${
        obj._id
      }">
      ${hasItem ? 'Remove from shopping list' : 'Add to shopping list'} 
      
      </button>
      <p class="modal-message ${
        hasItem ? '' : 'hidden'
      }">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        
      
      
    </div>

    
    
  `;
}

function linksTemplate(links) {
  const storeNames = {
    amazon: 'Amazon',
    appleBooks: 'Apple Books',
  };
  for (const [key, value] of Object.entries(storeNames)) {
    storeNames[key] = links.find(link => {
      return link.name === value;
    })?.url;
  }

  return `
    <ul class="marketplace-list">
        ${
          storeNames.amazon
            ? `<li class="marketplace-list-item">
              <a href="${storeNames.amazon}" >
              <svg class="modal-icons amazon-icon" width="64" height="30">
          <use href=".${icons}#icon-amazon"></use>
        </svg></a>
            </li>`
            : ''
        }
        ${
          storeNames.appleBooks
            ? `<li class="marketplace-list-item">
              <a href="${storeNames.appleBooks}" >
              <svg class="modal-icons appbooks-icon" width="33" height="32">
          <use href=".${icons}#icon-ibooks"></use>
        </svg></a>
            </li>`
            : ''
        }
          </ul>`;
}
