let randomKey;

function addItemLS(shopObject) {
  randomKey = `randomkey${Math.random()}`;
  localStorage.setItem(randomKey, JSON.stringify(shopObject));
}

function removeItemLS(randomKey) {
  localStorage.removeItem(randomKey);
}

// shopObject ожидаем примерно в таком виде:

// shopObject = {
//   book_image:
//     "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

//   title: "LESSONS IN CHEMISTRY",

//   list_name: "Audio Fiction",

//   description:
//     "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

//   author: "Bonnie Garmus",

//   amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

//   appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

//   id: "643282b1e85766588626a085",
// };
