 /*========= btn =========== */

function deleteBook() {
        const bookInfo = document.getElementById("bookInfo");

        if (bookInfo) {
          bookInfo.parentNode.removeChild(bookInfo);
          }
          
        const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];

        savedBooks = savedBooks.filter(function (book) {
          return book.title !== "book name"; 
        });
          
        localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
}
      
//  <li id="bookInfo">
//       <button type="button" class="delete-btn" onclick="deleteBook()"></button>
//  </li>