import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global';

export async function getCategoryList() {
  try {
    const response = await axios.get(`${BASE_URL}/books/category-list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category list:', error);
    throw error;
  }
}

export async function getTopBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books/top-books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top books:', error);
    throw error;
  }
}

export async function getBooksByCategory(selectedCategory) {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/category?category=${selectedCategory}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching books for category ${selectedCategory}:`,
      error
    );
    throw error;
  }
}

export async function getBookInfo(bookId) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for book ID ${bookId}:`, error);
    throw error;
  }
}
