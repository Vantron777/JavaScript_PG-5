import axios from 'axios';
import {
  renderTopBooks,
  renderCategoriesList,
  renderBooksByCategory,
} from './render-categories.js';

const BASE_URL = 'https://books-backend.p.goit.global';


export const getTopBooks = async booksPerRow => {
     const endpoint = '/books/top-books/';
    const fetchUrl = BASE_URL + endpoint;
  
  try {
    const response = await axios.get(fetchUrl);
    return renderTopBooks(response.data, booksPerRow);
  } catch (error) {
    console.error('Error fetching top books:', error);
    return '';
  }
};

export const getCategoryList = async () => {
  const endpoint = '/books/category-list/';
  const fetchUrl = BASE_URL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return renderCategoriesList(response.data);
  } catch (error) {
   console.error('Error fetching category list:', error);
  }
};

export const getBooksByCategory = async categoryName => {
  const endpoint = '/books/category/';
  const fetchUrl = BASE_URL + endpoint;
  const params = {
    category: categoryName,
  };

  try {
    const response = await axios.get(fetchUrl, { params });
    return renderBooksByCategory(response.data, categoryName);
  } catch (error) {
    console.error('Error fetching books by category:', error);
  }
};

export const getBookInfo = async id => {
  const endpoint = `/books/${id}`;
  const fetchUrl = BASE_URL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching books id:', error);
  }
};