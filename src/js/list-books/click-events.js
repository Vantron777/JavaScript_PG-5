const seeMoreBtn = document.querySelector(`.books-btn-see-more`);
const categoryClick = document.querySelector(`.categories-itm`);

seeMoreBtn.addEventListener('click', (event) => selectCategory(event));
categoryClick.addEventListener('click',(event)=> selectCategory(event));
function selectCategory(event) {
    const selectedCategory = event.target.list_name;
    if (selectedCategory) {
      handleClick(selectedCategory);
    }
}
async function handleClick(category) {
  try {
    const categoryBooks = await getBooksByCategory(category);
    // Функція для рендерингу категорій
    displayCategoryBooks(category, categoryBooks);
  } catch (error) {
    console.error(`Error handling category ${category}:`, error);
  }
}