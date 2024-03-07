import{i as I,a as A}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const C={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};C.openBurgerBtn.addEventListener("click",Q);C.closeBurgerBtn.addEventListener("click",Q);function Q(){C.burger.classList.toggle("is-hidden")}function p(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(t){e==="dark"?t.checked=!0:t.checked=!1})}const U=localStorage.getItem("theme");p(U||"light");const K=document.querySelectorAll('.common-toggle input[type="checkbox"]');K.forEach(function(e){e.addEventListener("change",function(o){o.target.checked?p("dark"):p("light")},!1)});const Y=document.querySelector('.toggle-theme input[type="checkbox'),k=localStorage.getItem("theme");k&&(document.documentElement.setAttribute("data-theme",k),k==="dark"&&(Y.checked=!0));Y.addEventListener("change",j,!1);function j(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function O(e){return e.map(t=>{const{_id:s,book_image:n,title:i,author:c}=t;return`<li class="books-box-itm" id="${s}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${n}"
                alt="${i}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${s}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${i}</p>
              <p class="books-box-desc-author">${c}</p>
            </div> 
            </li>`}).join("")}const Z=(e,o)=>{if(!e||e.length===0){M("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers <span class="books-title-span"> Books</span></h2>${e.map(s=>{const n=s.list_name,i=O(s.books.slice(0,o));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${n}</h3>
         <ul class="books-box-list">${i}</ul>
           <button data-categoryName="${n}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},P=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((t,s)=>t.list_name<s.list_name?-1:t.list_name>s.list_name?1:0).map(t=>`<li class="categories-itm"><a href="#" data-categoryName="${t.list_name}">${t.list_name}</a></li>`).join("")}`,$=(e,o)=>{if(!e||e.length===0){M("Sorry, category of book not found");return}else{const t=O(e),s=o.split(" "),n=s[s.length-1];return`<h2 class="books-box-title">
   ${s.slice(0,-1).join(" ")} 
   <span class="books-title-span">${n}</span>
 </h2>
 <div class="books-category-box">
   <ul class="books-category-list">${t}</ul>
 </div>`}};function M(e){I.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const m="https://books-backend.p.goit.global",_=async e=>{const t=m+"/books/top-books/";try{const s=await A.get(t);return Z(s.data,e)}catch(s){return console.error("Error fetching top books:",s),""}},ee=async()=>{const o=m+"/books/category-list/";try{const t=await A.get(o);return P(t.data)}catch(t){console.error("Error fetching category list:",t)}},te=async e=>{const t=m+"/books/category/",s={category:e};try{const n=await A.get(t,{params:s});return $(n.data,e)}catch(n){console.error("Error fetching books by category:",n)}},q=async e=>{const o=`/books/${e}`,t=m+o;try{return(await A.get(t)).data}catch(s){console.error("Error fetching books id:",s)}},N="/JavaScript_PG-5/assets/sprite-eb1087d7.svg",oe="addBook";function se(e){const o=JSON.parse(localStorage.getItem(oe)),t=o&&o.some(s=>s._id===e._id);return`
      
      <div class="modal-content">
        <button
        class="modal-close-btn modal-close-btn-js"
        type="button">
        <svg class="close-btn-icon" width="16" height="16">
          <use href="${N}#icon-x-close-black"></use>
          
        </svg>
      </button>
        <img class="modal-img" src="${e.book_image}" alt="cover" width = "192">

        <div class="modal-info">
          <h2 class="modal-title">${e.list_name}</h2>
          <p class="modal-author">${e.author}</p>
          <p class="modal-description">${e.description}</p>

          ${ne(e.buy_links)} 
        </div>
      </div>
    
    <div class="modal-buttons">
      <button class="modal-button-shopping-list" type="button" data-id="${e._id}">
      ${t?"Remove from shopping list":"Add to shopping list"} 
      
      </button>
      <p class="modal-message ${t?"":"hidden"}">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        
      
      
    </div>

    
    
  `}function ne(e){var t;const o={amazon:"Amazon",appleBooks:"Apple Books"};for(const[s,n]of Object.entries(o))o[s]=(t=e.find(i=>i.name===n))==null?void 0:t.url;return`
    <ul class="marketplace-list">
        ${o.amazon?`<li class="marketplace-list-item">
              <a href="${o.amazon}" >
                <img
                      class="modal-icons amazon-icon"
                      srcset="
                        ./img/shopping-list/amazon-tabl-desk-1x.png 1x,
                        ./img/shopping-list/amazon-tabl-desk-2x.png 2x
                      "
                      src="./img/shopping-list/amazon-mob-1x.png"
                      alt="logoAmazon"
                      width="62"
                      height="19"
                    />
              </a>
            </li>`:""}
        ${o.appleBooks?`<li class="marketplace-list-item">
              <a href="${o.appleBooks}" >
              <img
                      class="modal-icons appbooks-icon"
                      srcset="
                        ./img/shopping-list/apple-books-tabl-desk-1x.png 1x,
                        ./img/shopping-list/apple-books-tabl-desk-2x.png 2x
                      "
                      src="./img/shopping-list/apple-books-mob-1x.png"
                      alt="logo Apple books"
                      width="33"
                      height="32"
                    />
                  </a>
            </li>`:""}
          </ul>`}const T="addBook";let r;async function ie(e){const o=e.target.closest("button");try{if(o.classList.contains("modal-button-shopping-list")){r=JSON.parse(localStorage.getItem(T))||[];const t=await q(o.dataset.id),s=r.some(n=>n._id===t._id);console.log(r,s),s?r=r.filter(n=>n._id!==t._id):r.push(t),localStorage.setItem(T,JSON.stringify(r))}}catch(t){console.log(t.message)}}const re=document.querySelector(".modal-js"),ae=document.querySelector(".backdrop");let f,y;ae.addEventListener("click",de);async function le(e){const o=await q(e),t=se(o);re.innerHTML=t,ce(),f=document.querySelector(".modal-button-shopping-list"),y=document.querySelector(".modal-close-btn-js"),f.addEventListener("click",V),y.addEventListener("click",H),console.log(t)}function ce(){document.body.classList.add("show-modal"),window.addEventListener("keydown",z)}function E(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",z),f.removeEventListener("click",V),y.removeEventListener("click",H)}function V(e){const o="addBook";ie(e);const t=e.target.closest("button");if(!t.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(o))||[]).some(i=>i._id===t.dataset.id)?t.textContent="Add to shopping list":t.textContent="Remove from shopping list",t.nextElementSibling.classList.toggle("hidden")}function H(e){E()}function de(e){e.currentTarget===e.target&&E()}function z(e){console.log(e),e.key==="Escape"&&E()}const b={default:3,largeScreen:5,smallScreen:1};function B(e){return e>=1440?b.largeScreen:e<768?b.smallScreen:b.default}const ge=window.innerWidth;let w=B(ge);window.addEventListener("resize",()=>{const e=window.innerWidth;w=B(e)});async function S(){const e=document.querySelector(".categories-list"),o=await ee();return e.innerHTML=o,e.addEventListener("click",pe),e}async function pe(e){e.preventDefault();const o=e.target;if(!o.closest(".categories-itm"))return;const s=o.dataset.categoryname,n=await S();X(n,s),s==="all categories"?W():await F(n,s)}document.addEventListener("click",ue);async function ue(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const o=e.target.dataset.categoryname;await F(null,o),window.scrollTo({top:0,behavior:"smooth"});const t=await S();X(t,o)}}async function F(e,o){try{const t=document.querySelector(".books-box");if(!t){console.error("Element not found.");return}const s=await te(o);t.innerHTML=s}catch(t){console.error("Error displaying books by category:",t)}finally{}}async function W(){try{const e=document.querySelector(".books-box"),o=window.innerWidth;w=B(o);const s=await _(w);e.innerHTML=s}catch(e){console.error("Error displaying top books:",e)}finally{}}window.addEventListener("load",()=>{W(),S()});function X(e,o){e.querySelectorAll(".categories-itm").forEach(s=>{s.firstElementChild.dataset.categoryname===o?s.classList.add("js-categories-current"):s.classList.remove("js-categories-current")})}document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelectorAll(".books-box-list");console.log(e),e.forEach(o=>{console.log(o),o.classList.contains(".books-box-itm")?o.addEventListener("click",()=>{const t=o.id;console.log("Click"),le(t)}):console.error('Error: Element does not have class "books-box-itm"')})});const Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAPCAYAAACiLkz/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT5SURBVHgBtZZdbFRFFMfP3LvbpZQI1AoW2K8WfTBIghaEBGMMAdTWGH2AF0XRWJAQBSP6gEoTQYkikQ+jUCGgiYYYQ0zUBKLxA1AeWgFTsNV+7G4plbLQ0uI2bXfv+Jvb21qb2lqrJzmZM2fO/M/XzNyrBAqHw1FbZBfiQi3iZ/xaK7U2BhWEw8Wi1Mui9R70DyEXaa33sr5fiRyEo2beEI9vNljBYLDQb1k7EO+Es5RS32ZEVhusmZHIUmxflQHkKNVSFIuVfCySKYhE1uFnPTGkldYftKdSbyaTyY7CUKhUW9YTkskcENt+EJtZ2OzH54s+A2IrdQTlTYgn2HgjQRYTWBbzJSY/1uahizLeAAtrL2G3nLWbzX7mr8wMhQ7XJhJnCf4IqkLsTpDkNMalFOdtdMU4nQQXeLHnwH7lOFUEL9FweAO2ryO2gp3E36brxo+fmBRZD85sNwbLmsoY9nxupPCfWNOnT78e0HoUu+vj8YXi893nwmt9y8BKAdrSlU7nYfuDp6qievnMT7nmSoWo/jTGOqbb6xOJhcq2l/ZCaTfRuljsED4md2cyhey74Hagt/M0SdaYeY/jzPVnZ9+O2E0S60Kh0OT+ILQ+n5WdnYf0vZlaFN1qamq63BCL3YOTQ7R4K23a4plb8lf6wtiqvoAZORW/AfqrmWeU0o2NjRcMFrrDHIetKp3e1pf/QKAs296IIkxRPo0lEuWFweAs5hGWOsGoq6mp6QD/R3FbpOYP2Hq0urr6MrGe9Ypqu0FGQ6FDZHvMcZx7WeyUIQh9ZlBH0oOC0x7WQYPFhsV0IzUYJxKJPMDwLHzFse1n3H2WNcVb7urHV6rdLYzjTBywvdtz6PQpLADvwngZ3k939vQs4Fi8IP+SCH4xWI8gnpmclzefi1fmZeYmaY4Dib/l6rTel5ub6x6jVHd3rQeRLX0F0XqCG6BSyeF8WlywfC/jrubm5hQXerm3lktyk4bYo4dEymRMV4Le7EplZWWPOE6Jhz3FBM+L8bx3VIxuQ+ulSyleuX2BQKAd0DjqAHa3RfPzzUWdK+aR6ur6CRz52wRwXOVlfEdBKHRGO4555loMGAE9LKMgjsQ5T7ybwE4T7GYxL4rIBAp1P1Gbo9Jj7g0dqGDeyvzxtHkcvOfVp9Tnyu+vQPSTVFndxYstw/n01TU2VtH6FVRkJS3v0Ol0qe3zZXMf5jckErvNEeOiHOACVLhBOs5xy7ZzeI97E1fqKPw7602NsVhVNBpdztO4ipWraa3X8lHpZH0Rr8/7kRkz4r5x4zbV1tae7/MfCQZLfNeuJWNtbXuJI0UcT2EfgLfwILjHjfof4yjlUJAzbq1t+zjFDWQsK66Gy06/I4up13fq6T8v11hIl8tsonkDcRY8idP+syqVIhkDWSOsN0tAvtTvyaPyX1C3pKRVlkmpzGBWwm0KyxhJjWRA1aJU7QDOoliXI39Gk0/JKIkfkYlgLABjDWMnOLvFJ2V0YJGMgUZMoD+AclmJ09cQp8K/wN8QyDkQTvLTUSOPyVWlel8ovZO+2TKFtTmMc1DdChfDKTB2UYAyEtpB/0+qJ+UjGQP94wTcwLbzTueIuaAr4DmDl8UcEj5LoPoHrdWg/5C0dqqV0uYavyvPqdWyTcZIo0qgj9wP0x6Zh1AEL2EWgfnRohfKTaKd0Xzuv0KuRK5Qq3gO/gf6A2jqFM1UNUFhAAAAAElFTkSuQmCC",me="data:image/png;base64,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",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAALCAYAAAAeEY8BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgBrVNNSFRRFD7nvnmTRKaOFjqk8+NghhWBLVoUhYxCP2ZCGRRkaaFBQYhRkZuiNgVFCy0NDcXa1CIoiVbpQgZKKoOkwnRmskho4U+Zzrx3b98bJxAVm0UH3rxzv3vOd875zhv2+XzLZDTappQqE8yhGdPcl6RpGYroCrBXeJcCr8f7hmJ+FzWMo7qu55GUd5hoE/D7UdM8bWeuZCFOEAxYdCgU2uJ1u8+A4ywp9dpQqsYuRD6u66RSn4nZL4n2CxT3I8HPzBUosEoXoj5K5ABWhKA1wJ1I6ETiW1aqQifawFJeBOkoYk6hieokw/CYQvSjWAdIM4Glu93ufMTcBHYLjeXYmM8hPhNPCQZKw51LU+qIQKddSNqBJC+CfwkiO8VtcmqqFk28FEI8lcwX4tMtR06FjagRx3UWZup6eigUCqDBcfA4o5aaRDtxNRMMh69BrS4MsjdOq2V7PFU4BxDrEF6Xa7dGNGAq5QAQoTmWkpICMYiVlFNz8VyXq8VkbhFKhf9imDhTCXEJblM4HB5AMyusBmJNY7A56ZHu7m5sRJnWQeC2GM8gOr2M6QxaaGoRoAQ57VCnL352YOLzcHOAb/a4XMdR4A3OyXlZWRlQcC3wb4twkw17/4LJfZgqIK1piQqBP6KlTKkRFK+EZ8n6Azu19r0efi/wCfBdtSUlFRjT00OG3f4MeCF4DwLX51Ox9YM1HJKQGXvusduVg2jZhBGJ7IIq7ZB2u02pSYN5CLssIyF6ZqWjcqzuBYr//jg8/On6gRR3fdF4AdlINvekfq3tHOtHrptN87CmaX2DweDzXKczW+n6NnxDDyxeTcqfvGC4e5SKL6GOJLXxSQpSgqZuUzm6Wgm3FDtp51p6kkiemA/wMRoD2ghtHoK0QzXT1n+RIG41XhtRuBh5g/A/UILGSxLfpWoo0QA3Gc/7OPEIChnITIPvpdlvJhVYA32nVsqkKkzfRP+jgVgTrSgeIT/cPVCmAO9cmv1njKK5XmAB+I+5hsZj8VhhTMUE7Q/azEr9JnZqmAAAAABJRU5ErkJggg==",ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgB5VVLaxRBEP5qZtcs4iES8yAJBtHkkIMxBy9RQRREz74QQRANahCJOag/QQUfIQcRgwevKgoxeNOjBw/BzUFIfMRo0IhZEKJxs7NdVs9mZ7t3ZzYK48V80DPdVdX1dXVVdwP/OyhMyMOJveziJBgbZbRGRA7+BEyeeMxI7ysx36MT+YfLEuaHk9dFeB4xgBhD1Js7F0nId5LHmekuYgQT9bm92VvFsbVVrOiSNMTZSOEiwiLk26n1SuED/gEcUCudWZjR/UQg9ahVisRGQzeo/ShQv9mfhrlx8NgNYH66oF/dDOoeEH2XXjLwLS36QeDHR8tNzvVa5FdGyJyAKu0wte8H7ZF0OiUTtPSAOg5BPdoH/PwO58gLIFVr6LeDuvqgRg4DU08CcVK5NUKLsgh9mtLkdVttsiJSa0Fb+sXUtckMUPMO8LvRksCoFIuQHQooGRR+SLXDuk4xWEQkGIWCKXSFMCmfXzahJ13SlVV0ytH+QNpuVeSC5GgBhq/C7sEm9IUSYWDFUe58Ru01Wq1VypivOIRQI0/2pGoOq0Ev1vTlhhHqCCkuQtgRuokQQumyYUTLOUWVLWeyfEXn0Iiwaor+OsLQHErpyt1mrtL/TT4HMm/AXhbU2AnatGvJYEk/8Qw8N6HPAahB63dWEubCCPNiZlbm+5fIv9oN/pyGCeo6CKfnlH/w1f3TUOmyJ6+2DbRhm100KiSHnFVZSpSuBH49akUSyMceSLSevzZOP67QIzMNzkxb8gX2VAVhEvQpt7QNwQ0Rgfz4CMixi6zaPHn9Z0ybANkLjVMiaEOMkAVM1lyd7SiO7QeY6Yqf7BibHK/LJkfFYVocaBoS8VnEAEVqMHVttr8qoUa2v+mAXKvHZDvqJeo6sXILFwEXpoQmi/ULw+RgnhW/FfVw6uaXp1hx+A0UBDY6I0BACQAAAABJRU5ErkJggg==",be="data:image/png;base64,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",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGjSURBVHgBrVI9SwNBEH2ziVFEQYmFqKiJjdgEBBHEj6CN4C+xEkGwtRMFsbCxs9Aigv4FC+3ExEoUkRDUQqy0MSS53XH21uSSqCSgA3fszOy9ee/dAH8MKh/4AF1Gh1dJYVpS9dsHDLpVhdI2LSNn83CloSNpYsSh0WhiksORRebiCBHYn1Taa5tnj+KspdLcE/P22+YqDGTyIDzBYiE4sQ70jAOFN3B6001NrADRMeDmEHx/JAUCGTUcSNAhKw4UWwJNbgR8O4fd5YEZl/fP+i7wXQowruQAjAIbQYh0B67ayR2DFrfOxRaIXB+oAmCKYrsSCVrVOf49rAe+XMPVDEKOkiE0RLB37CCvWoJ4wPa2ph9G1uXym60E/loVB1CShIyPztlzmOsUqC8Biiell4c52wK/P4OGpsQr5SRwDQP7EiMzp9BXx25w5gQUHQG3R4GnS1ezvUi7A0AVgNacC1lK2iIFMvg1K+9sTQ35vJ8T0SPKHbsCpbXeBznG0UTIvuVad15iFQaCwnkPCyGCrCGNBu5RrZNiEZG6aNEfu/iv+ATr4Kv3MVuvIQAAAABJRU5ErkJggg==",ye="/JavaScript_PG-5/assets/empy-books-tab-desk-1x-4e44a81a.png",we="/JavaScript_PG-5/assets/empy-books-tab-desk-2x-33dfbeb3.png",Ce="/JavaScript_PG-5/assets/empty-books-mob-a43bd610.png",G=document.querySelector(".shopping-list-title");function a(){return JSON.parse(localStorage.getItem("addBook"))}function Ee(e){D();const o=a().map(t=>`<li class="shoppinglist-book" id="${t._id}">
          <img
            class="shoppinglist-book-image"
            src="${t.book_image}"
            alt="book image"
            width="100"
            height="142"
          /><div class="shoppinglist-cart-content">
            <h3 class="shoppinglist-book-title">${t.title}</h3>
            <p class="shoppinglist-book-category">${t.list_name}</p>
            <p class="shoppinglist-book-description">${t.description}</p><div class="shoppinglist-low-div">
              <p class="shoppinglist-book-author">${t.author}</p>
              <ul class="shoppinglist-book-low-ul">
                <li class="shoppinglist-book-low-li-amazon">
                  <a
                    class="shopping-amazon-link"
                    href="${t.amazon_product_url}"
                    target="_blank"
                  >
                    <img
                      class="shopping-listamazon-img"
                      srcset="${Ae} 1x, ${me} 2x"
                      src="${he}"
                      alt="logoAmazon"
                      width="32"
                      height="11"
                    />
                  </a>
                </li>
                <li class="shoppinglist-book-low-li-apple">
                  <a
                    class="shopping-apple-link"
                    href="${t.buy_links[1].url}"
                    target="_blank"
                  >
                    <img
                      class="shopping-apple-img"
                      srcset="${ke} 1x, ${be} 2x"
                      src="${fe}"
                      alt="logo Apple books"
                      width="16"
                      height="16"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="shoppinglist-book-deletebutton">
              <svg class="shoppinglist-btn-svg" width="18" height="18">
                <use href="${N}#icon-trash_bin"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");G.insertAdjacentHTML("afterend",'<div class="shopinglist-cart"><ul class="shoppinglist-list"></ul></div>'),document.querySelector(".shoppinglist-list").innerHTML=o}function J(){document.querySelector(".shoppinglist-list")&&document.querySelector(".shoppinglist-list").remove(),D();const e=`<p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      srcset="${ye} 1x, ${we} 2x"
      class="shopping-list-img"
      src="${Ce}"
      alt="a lot of books"
    />`;G.insertAdjacentHTML("afterend",e),I.info({message:"The list of books is empty.",timeout:3e3,position:"topRight"})}function D(){document.querySelector(".shopping-list-img")&&(document.querySelector(".shopping-list-img").remove(),document.querySelector(".shopping-list-text").remove())}document.querySelector(".shopping-list").addEventListener("click",e=>{if(e.target.nodeName=="BUTTON"){const o=e.target.closest("li").getAttribute("id");console.log(o);const t=a().filter(n=>n._id!==o);addtoLS(t),document.querySelector(`li[id="${o}"]`).remove()}(!a()||a().length===0)&&J()});a()&&a().length>0?Ee(a()):J();window.addEventListener("load",()=>{setTimeout(()=>{},350)});document.querySelector(".loader");const v=document.querySelector(".support.container-s");v||console.error("Parent container not found.");let R=0;const Be=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/support/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/support/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/support/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/support/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/support/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/support/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/support/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/support/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/support/serhiy-prytula-charity-foundation@2x.png"}],L=document.createElement("div");L.classList.add("swiper-container");const h=document.createElement("div");h.classList.add("swiper-wrapper");h.id="swiper-wrapper";function Se(e){const o=document.createElement("div");o.classList.add("swiper-slide");const t=(R+1).toString().padStart(2,"0"),s=document.createElement("a");s.classList.add("link-s"),s.href=e.url,s.target="_blank";const n=document.createElement("img");n.classList.add("img-s"),n.src=e.img,n.alt=e.title,s.appendChild(n);const i=document.createElement("span");i.classList.add("charity-index"),i.textContent=t,o.appendChild(i),o.appendChild(s),h.appendChild(o),R++}Be.forEach(e=>{Se(e)});L.appendChild(h);v.appendChild(L);const x=document.createElement("div");x.classList.add("button-con");const d=document.createElement("label");d.classList.add("container-btn");d.classList.add("btn-s");const l=document.createElement("input");l.setAttribute("type","checkbox");l.checked=!0;l.setAttribute("hidden",!0);const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("viewBox","0 0 512 512");g.setAttribute("height","1em");g.classList.add("chevron-down");g.innerHTML='<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>';d.appendChild(l);d.appendChild(g);x.appendChild(d);v.appendChild(x);l.addEventListener("change",()=>{const e=document.querySelector(".swiper-wrapper"),o=document.querySelector(".chevron-down");l.checked?o.style.transform="":o.style.transform="rotate(-180deg)",(e.scrollTop<=0?"down":"up")==="down"?e.scrollTop+e.clientHeight>=e.scrollHeight?e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop<=0?e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});function ve(){window.scrollTo({top:0,behavior:"smooth"})}const u=document.querySelector(".top-btn");u.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?u.style.display="inline-flex":u.style.display="none"});u.addEventListener("click",ve);
//# sourceMappingURL=main-aaecab81.js.map
