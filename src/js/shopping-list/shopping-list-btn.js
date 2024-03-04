 /*========= btn =========== */

// function deleteBook() {
//         const bookInfo = document.getElementById("bookInfo");

//         if (bookInfo) {
//           bookInfo.parentNode.removeChild(bookInfo);
//           }
          
//         const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];

//         savedBooks = savedBooks.filter(function (book) {
//           return book.title !== "book name"; 
//         });
          
//         localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
// }
      
//  <li id="bookInfo">
//       <button type="button" class="delete-btn" onclick="deleteBook()"></button>
//  </li>

/* ================= render-func.js ================= */

// function bookCardTemplate(book) {
//   const {
//     coverImage,
//     title,
//     category,
//     shortDescription,
//     author,
//     marketLinks
//   } = book;

//   const marketLinksHTML = marketLinks.map(link => `<a href="${link}">${link}</a>`).join('');

//   return `<li class="book-card" data-book-id="${book.id}">
//     <img src="${coverImage}" alt="${title}" />
//     <h2>${title}</h2>
//     <p>Category: ${category}</p>
//     <p>${shortDescription}</p>
//     <p>Author: ${author}</p>
//     <div class="market-links">
//       <p>Market Links:</p>
//       ${marketLinksHTML}
//     </div>
//     <button class="remove-btn" onclick="removeFromShoppingList('${book.id}')">Remove from Shopping list</button>
//   </li>`;
// }

// export function renderBooksList(books) {
//   return books.map(bookCardTemplate).join('');
// }

/* ================= api.js ================= */

// import axios from 'axios';

// export async function fetchCategories() {
//   try {
//     const response = await axios.get('https://books-backend.p.goit.global/books/category-list/');
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching categories: ${error.message}`);
//   }
// }

// export async function fetchTopBooks() {
//   try {
//     const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching top books: ${error.message}`);
//   }
// }

// export async function fetchBooksByCategory(category) {
//   try {
//     const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching books by category: ${error.message}`);
//   }
// }

// export async function fetchBookDetails(bookId) {
//   try {
//     const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching book details: ${error.message}`);
//   }
// }

/* ================ main.js ================== */

// import { fetchCategories, fetchTopBooks, fetchBooksByCategory, fetchBookDetails } from './api.js.js';
// import { renderBooksList } from './render-func.js.js';

// const shoppingListContainer = document.getElementById('shoppingList');

// async function displayShoppingList() {
//   try {
//     const categories = await fetchCategories();
//     console.log('Categories:', categories);

//     const topBooks = await fetchTopBooks();
//     console.log('Top Books:', topBooks);

//     const selectedCategory = 'selectedCategory';
//     const booksByCategory = await fetchBooksByCategory(selectedCategory);
//     console.log(`Books in ${selectedCategory}:`, booksByCategory);

//     const bookId = 'bookId';
//     const bookDetails = await fetchBookDetails(bookId);
//       console.log('Book Details:', bookDetails);
      
//     const shoppingListData = [bookDetails, ...topBooks, ...booksByCategory];
//     await renderShoppingList(shoppingListData);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function renderShoppingList(books) {
//   shoppingListContainer.innerHTML = '';

//   if (books.length === 0) {
//     shoppingListContainer.innerHTML = 'Your Shopping list is empty.';
//     return;
//   }

//   const limitedList = books.slice(0, 3);
//   const booksHTML = renderBooksList(limitedList);
//   shoppingListContainer.innerHTML = booksHTML;
// }

// displayShoppingList();

// ===========================================

