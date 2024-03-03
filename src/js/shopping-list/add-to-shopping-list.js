import { getBookInfo } from '../list-books/books-API';
export const LOCAL_STORAGE_KEY = 'addBook';
export let inLocalStorage;

export async function addToShoppingList(e) {
  const button = e.target.closest('button');
  try {
    if (button.classList.contains('modal-button-shopping-list')) {
      inLocalStorage =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      const data = await getBookInfo(button.dataset.id);
      const findCopy = inLocalStorage.some(item => item._id === data._id);
      console.log(inLocalStorage, findCopy);
      if (!findCopy) {
        inLocalStorage.push(data);
      } else {
        inLocalStorage = inLocalStorage.filter(item => item._id !== data._id);
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inLocalStorage));
    }
  } catch (error) {
    console.log(error.message);
  }
}
