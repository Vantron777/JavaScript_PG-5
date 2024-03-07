import{i as q,a as m}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const w={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};w.openBurgerBtn.addEventListener("click",A);w.closeBurgerBtn.addEventListener("click",A);function A(){w.burger.classList.toggle("is-hidden")}function g(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(t){e==="dark"?t.checked=!0:t.checked=!1})}const B=localStorage.getItem("theme");g(B||"light");const P=document.querySelectorAll('.common-toggle input[type="checkbox"]');P.forEach(function(e){e.addEventListener("change",function(o){o.target.checked?g("dark"):g("light")},!1)});const $=document.querySelector('.toggle-theme input[type="checkbox'),b=localStorage.getItem("theme");b&&(document.documentElement.setAttribute("data-theme",b),b==="dark"&&($.checked=!0));$.addEventListener("change",W,!1);function W(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function I(e){return e.map(t=>{const{_id:s,book_image:n,title:r,author:a}=t;return`<li class="books-box-itm" id="${s}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${n}"
                alt="${r}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${s}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${r}</p>
              <p class="books-box-desc-author">${a}</p>
            </div> 
            </li>`}).join("")}const U=(e,o)=>{if(!e||e.length===0){M("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers <span class="books-title-span"> Books</span></h2>${e.map(s=>{const n=s.list_name,r=I(s.books.slice(0,o));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${n}</h3>
         <ul class="books-box-list">${r}</ul>
           <button data-categoryName="${n}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},D=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((t,s)=>t.list_name<s.list_name?-1:t.list_name>s.list_name?1:0).map(t=>`<li class="categories-itm"><a href="#" data-categoryName="${t.list_name}">${t.list_name}</a></li>`).join("")}`,J=(e,o)=>{if(!e||e.length===0){M("Sorry, category of book not found");return}else{const t=I(e),s=o.split(" "),n=s[s.length-1];return`<h2 class="books-box-title">
   ${s.slice(0,-1).join(" ")} 
   <span class="books-title-span">${n}</span>
 </h2>
 <div class="books-category-box">
   <ul class="books-category-list">${t}</ul>
 </div>`}};function M(e){q.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const h="https://books-backend.p.goit.global",K=async e=>{const t=h+"/books/top-books/";try{const s=await m.get(t);return U(s.data,e)}catch(s){return console.error("Error fetching top books:",s),""}},F=async()=>{const o=h+"/books/category-list/";try{const t=await m.get(o);return D(t.data)}catch(t){console.error("Error fetching category list:",t)}},Y=async e=>{const t=h+"/books/category/",s={category:e};try{const n=await m.get(t,{params:s});return J(n.data,e)}catch(n){console.error("Error fetching books by category:",n)}},G=async e=>{const o=`/books/${e}`,t=h+o;try{return(await m.get(t)).data}catch(s){console.error("Error fetching books id:",s)}},y={default:3,largeScreen:5,smallScreen:1};function S(e){return e>=1440?y.largeScreen:e<768?y.smallScreen:y.default}const Z=window.innerWidth;let k=S(Z);window.addEventListener("resize",()=>{const e=window.innerWidth;k=S(e)});async function v(){const e=document.querySelector(".categories-list"),o=await F();return e.innerHTML=o,e.addEventListener("click",Q),e}async function Q(e){e.preventDefault();const o=e.target;if(!o.closest(".categories-itm"))return;const s=o.dataset.categoryname,n=await v();N(n,s),s==="all categories"?H():await O(n,s)}document.addEventListener("click",V);async function V(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const o=e.target.dataset.categoryname;await O(null,o),window.scrollTo({top:0,behavior:"smooth"});const t=await v();N(t,o)}}async function O(e,o){try{const t=document.querySelector(".books-box");if(!t){console.error("Element not found.");return}const s=await Y(o);t.innerHTML=s}catch(t){console.error("Error displaying books by category:",t)}finally{}}async function H(){try{const e=document.querySelector(".books-box"),o=window.innerWidth;k=S(o);const s=await K(k);e.innerHTML=s}catch(e){console.error("Error displaying top books:",e)}finally{}}window.addEventListener("load",()=>{H(),v()});function N(e,o){e.querySelectorAll(".categories-itm").forEach(s=>{s.firstElementChild.dataset.categoryname===o?s.classList.add("js-categories-current"):s.classList.remove("js-categories-current")})}const T="addBook";let i;async function X(e){const o=e.target.closest("button");try{if(o.classList.contains("modal-button-shopping-list")){i=JSON.parse(localStorage.getItem(T))||[];const t=await G(o.dataset.id),s=i.some(n=>n._id===t._id);console.log(i,s),s?i=i.filter(n=>n._id!==t._id):i.push(t),localStorage.setItem(T,JSON.stringify(i))}}catch(t){console.log(t.message)}}document.querySelector(".modal-js");const ee=document.querySelector(".backdrop");let te,oe;ee.addEventListener("click",re);function L(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",ie),te.removeEventListener("click",se),oe.removeEventListener("click",ne)}function se(e){const o="addBook";X(e);const t=e.target.closest("button");if(!t.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(o))||[]).some(r=>r._id===t.dataset.id)?t.textContent="Add to shopping list":t.textContent="Remove from shopping list",t.nextElementSibling.classList.toggle("hidden")}function ne(e){L()}function re(e){e.currentTarget===e.target&&L()}function ie(e){console.log(e),e.key==="Escape"&&L()}const j=document.querySelector(".shopping-list-title");function c(){return JSON.parse(localStorage.getItem("addBook"))}function ce(e){R();const o=c().map(t=>`<li class="shoppinglist-book" id="${t._id}">
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
                      srcset="
                        ./img/shopping-list/amazon-tabl-desk-1x.png 1x,
                        ./img/shopping-list/amazon-tabl-desk-2x.png 2x
                      "
                      src="./img/shopping-list/amazon-mob-1x.png"
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
                      srcset="
                        ./img/shopping-list/apple-books-tabl-desk-1x.png 1x,
                        ./img/shopping-list/apple-books-tabl-desk-2x.png 2x
                      "
                      src="./img/shopping-list/apple-books-mob-1x.png"
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
                <use href="./img/sprite.svg#icon-trash_bin"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");j.insertAdjacentHTML("afterend",'<div class="shopinglist-cart"><ul class="shoppinglist-list"></ul></div>'),document.querySelector(".shoppinglist-list").innerHTML=o}function z(){document.querySelector(".shoppinglist-list")&&document.querySelector(".shoppinglist-list").remove(),R();const e=`<p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      srcset="
        ./img/shopping-list/empy-books-tab-desk-1x.png 1x,
        ./img/shopping-list/empy-books-tab-desk-2x.png 2x
      "
      class="shopping-list-img"
      src="./img/shopping-list/empty-books-mob.png"
      alt="a lot of books"
    />`;j.insertAdjacentHTML("afterend",e),q.info({message:"The list of books is empty.",timeout:3e3,position:"topRight"})}function R(){document.querySelector(".shopping-list-img")&&(document.querySelector(".shopping-list-img").remove(),document.querySelector(".shopping-list-text").remove())}document.querySelector(".shopping-list").addEventListener("click",e=>{if(e.target.nodeName=="BUTTON"){const o=e.target.closest("li").getAttribute("id");console.log(o);const t=c().filter(n=>n._id!==o);addtoLS(t),document.querySelector(`li[id="${o}"]`).remove()}c().length===0&&z()});c()&&c().length>0?ce(c()):z();window.addEventListener("load",()=>{setTimeout(()=>{},350)});document.querySelector(".loader");const E=document.querySelector(".support.container-s");E||console.error("Parent container not found.");let _=0;const le=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/support/save-the-children.png",resolution:"../img/support/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/support/project-hope.png",resolution:"../img/support/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/support/united.png",resolution:"../img/support/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/support/international-medical-corps.png",resolution:"../img/support/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/support/medicins-sans-frontieres.png",resolution:"../img/support/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/support/razom.png",resolution:"../img/support/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/support/action-ageinst-hunger.png",resolution:"../img/support/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/support/world-vision.png",resolution:"../img/support/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/support/sergiy-prytula.png",resolution:"../img/support/serhiy-prytula-charity-foundation@2x.png"}],x=document.createElement("div");x.classList.add("swiper-container");const f=document.createElement("div");f.classList.add("swiper-wrapper");f.id="swiper-wrapper";function ae(e){const o=document.createElement("div");o.classList.add("swiper-slide");const t=(_+1).toString().padStart(2,"0"),s=document.createElement("a");s.classList.add("link-s"),s.href=e.url,s.target="_blank";const n=document.createElement("img");n.classList.add("img-s"),n.setAttribute("srcset",`${e.img}, ${e.resolution} 2x`),n.alt=e.title,s.appendChild(n);const r=document.createElement("span");r.classList.add("charity-index"),r.textContent=t,o.appendChild(r),o.appendChild(s),f.appendChild(o),_++}le.forEach(e=>{ae(e)});x.appendChild(f);E.appendChild(x);const C=document.createElement("div");C.classList.add("button-con");const d=document.createElement("label");d.classList.add("container-btn");d.classList.add("btn-s");const l=document.createElement("input");l.setAttribute("type","checkbox");l.checked=!0;l.setAttribute("hidden",!0);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("viewBox","0 0 512 512");p.setAttribute("height","1em");p.classList.add("chevron-down");p.innerHTML='<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>';d.appendChild(l);d.appendChild(p);C.appendChild(d);E.appendChild(C);l.addEventListener("change",()=>{const e=document.querySelector(".swiper-wrapper"),o=document.querySelector(".chevron-down");l.checked?o.style.transform="":o.style.transform="rotate(-180deg)",(e.scrollTop<=0?"down":"up")==="down"?e.scrollTop+e.clientHeight>=e.scrollHeight?e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop<=0?e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});function de(){window.scrollTo({top:0,behavior:"smooth"})}const u=document.querySelector(".top-btn");u.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?u.style.display="inline-flex":u.style.display="none"});u.addEventListener("click",de);
//# sourceMappingURL=main-d6043249.js.map
