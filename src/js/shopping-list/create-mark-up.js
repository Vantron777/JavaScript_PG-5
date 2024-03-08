import icons from '../../img/sprite.svg';
import amazontabdesk1x from '../../img/shopping-list/amazon-tabl-desk-1x.png';
import amazontabdesk2x from '../../img/shopping-list/amazon-tabl-desk-2x.png';
import amazonmob1x from '../../img/shopping-list/amazon-mob-1x.png';
import appletabdesk1x from '../../img/shopping-list/apple-books-tabl-desk-1x.png';
import appletabdesk2x from '../../img/shopping-list/apple-books-tabl-desk-2x.png';
import applemob1x from '../../img/shopping-list/apple-books-mob-1x.png';

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
        <svg class="close-btn-icon" width="16" height="16">
          <use href="${icons}#icon-x-close-black"></use>
          
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
      }">Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        
      
      
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
                
                  <img
                      class="modal-icons amazon-icon"
                      srcset="${amazontabdesk1x} 1x, ${amazontabdesk2x} 2x"
                      src="${amazonmob1x}"
                      alt="logoAmazon"
                      width="62"
                      height="19"
                    />
              </a>
            </li>`
            : ''
        }
        ${
          storeNames.appleBooks
            ? `<li class="marketplace-list-item">
              <a href="${storeNames.appleBooks}" >
              
                    <img
                      class="modal-icons appbooks-icon"
                      srcset="${appletabdesk1x} 1x, ${appletabdesk2x} 2x"
                      src="${applemob1x}"
                      alt="logo Apple books"
                      width="33"
                      height="32"
                    />
                  </a>
            </li>`
            : ''
        }
          </ul>`;
}
