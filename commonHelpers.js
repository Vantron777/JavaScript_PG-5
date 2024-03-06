import{a as M,i as N}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const k={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};k.openBurgerBtn.addEventListener("click",L);k.closeBurgerBtn.addEventListener("click",L);function L(){k.burger.classList.toggle("is-hidden")}function d(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(o){e==="dark"?o.checked=!0:o.checked=!1})}const w=localStorage.getItem("theme");d(w||"light");const O=document.querySelectorAll('.common-toggle input[type="checkbox"]');O.forEach(function(e){e.addEventListener("change",function(t){t.target.checked?d("dark"):d("light")},!1)});const E=document.querySelector('.toggle-theme input[type="checkbox'),m=localStorage.getItem("theme");m&&(document.documentElement.setAttribute("data-theme",m),m==="dark"&&(E.checked=!0));E.addEventListener("change",j,!1);function j(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function C(e){return e.map(o=>{const{_id:n,book_image:s,title:i,author:c}=o;return`<li class="books-box-itm" id="${n}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${s}"
                alt="${i}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${n}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${i}</p>
              <p class="books-box-desc-author">${c}</p>
            </div> 
            </li>`}).join("")}const I=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(n=>{const s=n.list_name,i=C(n.books.slice(0,t));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
        <ul class="books-box-list">${i}</ul>
        <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}</div>`,P=e=>`<li class="categories-itm js-categories-current "><a href="#" data-categoryName="">All categories</a></li>${e.map(o=>`<li class="categories-itm"><a href="#" data-categoryName="${o.list_name}">${o.list_name}</a></li>`).join("")}`,R=e=>e.map(o=>{const n=C(o);return`<div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${o.list_name}</h2>
      <ul class="books-category-list">${n}</ul>
    </div>`}).join(""),z="https://books-backend.p.goit.global",p=async(e,t=null)=>{const o=`${z}/books${e}`;try{return(await M.get(o,{params:t})).data}catch(n){console.log(n)}},H=async e=>{const t=await p("/top-books/");return I(t,e)},W=async()=>{const e=await p("/category-list/");return P(e)},D=async(e="")=>{const t=await p("/category/",{category:e});return R(t)},J=async e=>p(`/${e}`),f=document.querySelector(".books-box"),l=document.querySelector(".categories-list"),h={default:3,largeScreen:5,smallScreen:1};async function x(e){f.innerHTML=e;const t=document.querySelector(".books-box-desc-title");t&&U(t)}async function K(){const e=await W();l.innerHTML=e}async function B(){const e=window.innerWidth,t=F(e),o=await H(t);x(o)}async function T(e){const t=await D(e);return x(t)}function U(e){const t=e.textContent.split(" "),o=t.pop(),n=t.join(" ")+(t.length>0?` <span class="books-title-color">${o}</span>`:o);e.innerHTML=n}function F(e){return e>=1440?h.largeScreen:e<768?h.smallScreen:h.default}f&&(B(),K(),l.addEventListener("click",Y),f.addEventListener("click",G));function Y(e){e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.categoryName;l.querySelector(".js-categories-current").classList.remove("js-categories-current"),t.classList.add("js-categories-current"),o===""?B():T(o)}}function G(e){e.preventDefault();const t=e.target;if(t.classList.contains("books-btn-see-more")){const o=t.dataset.categoryName;l.querySelector(".js-categories-current").classList.remove("js-categories-current"),l.querySelector(`[data-categoryName="${o}"]`).classList.add("js-categories-current"),T(o)}}const v="addBook";let r;async function Z(e){const t=e.target.closest("button");try{if(t.classList.contains("modal-button-shopping-list")){r=JSON.parse(localStorage.getItem(v))||[];const o=await J(t.dataset.id),n=r.some(s=>s._id===o._id);console.log(r,n),n?r=r.filter(s=>s._id!==o._id):r.push(o),localStorage.setItem(v,JSON.stringify(r))}}catch(o){console.log(o.message)}}document.querySelector(".modal-js");const Q=document.querySelector(".backdrop");let V,X;Q.addEventListener("click",oe);function y(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",se),V.removeEventListener("click",ee),X.removeEventListener("click",te)}function ee(e){const t="addBook";Z(e);const o=e.target.closest("button");if(!o.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(t))||[]).some(i=>i._id===o.dataset.id)?o.textContent="Add to shopping list":o.textContent="Remove from shopping list",o.nextElementSibling.classList.toggle("hidden")}function te(e){y()}function oe(e){e.currentTarget===e.target&&y()}function se(e){console.log(e),e.key==="Escape"&&y()}const _=document.querySelector(".shopping-list-title");function a(){return JSON.parse(localStorage.getItem("addBook"))}function ne(e){ie();const t=a().map(o=>`<li class="shoppinglist-book" id="${o._id}">
          <img
            class="shoppinglist-book-image"
            src="${o.book_image}"
            alt="book image"
          />
          <div class="shoppinglist-total-div">
            <div class="shoppinglist-tb-div">
              <div class="shoppinglist-titcat-div">
                <h3 class="shoppinglist-book-title">${o.title}</h3>
                <p class="shoppinglist-book-category">${o.list_name}</p>
              </div>

              <button
                type="button"
                class="shoppinglist-book-deletebutton"
              ></button>
            </div>

            <div class="shoppinglist-desauthorlink">
              <p class="shoppinglist-book-description">${o.description}</p>

              <div class="shoppinglist-low-div">
                <p class="shoppinglist-book-author">${o.author}</p>
                <ul class="shoppinglist-book-low-ul">
                  <li class="shoppinglist-book-low-li-amazon">
                    <a
                      class="shopping-amazon-link"
                      href="${o.amazon_product_url}"
                      target="_blank"
                    >
                      <img
                        class="shopping-listamazon-img"
                        src="./img/amazon.png"
                        alt="logoAmazon"
                      />
                    </a>
                  </li>
                  <li class="shoppinglist-book-low-li-apple">
                    <a
                      class="shopping-apple-link"
                      href="${o.buy_links[1].url}"
                      target="_blank"
                    >
                      <img
                        class="shopping-apple-img"
                        src="./img/apple.png"
                        alt="logo Apple books"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>`).join("");_.insertAdjacentHTML("afterend",'<ul class="books"></ul>'),document.querySelector(".books").innerHTML=t}function $(){document.querySelector(".books")&&document.querySelector(".books").remove();const e=`<p class="shopping-list-text">
            This page is empty, add some books and proceed to order.
          </p>
              <img
                class="shopping-list-img"
                src="./img/books.png"
                alt="a lot of books"
              />`;_.insertAdjacentHTML("afterend",e),N.info({message:"The list of books is empty.",timeout:3e3,position:"topRight"})}function ie(){document.querySelector(".shopping-list-img")&&(document.querySelector(".shopping-list-img").remove(),document.querySelector(".shopping-list-text").remove())}document.querySelector(".shopping-list").addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName=="BUTTON"){const t=e.target.closest("li").getAttribute("id");console.log(t);const o=a().filter(s=>s._id!==t);addtoLS(o),document.querySelector(`li[id="${t}"]`).remove()}a().length===0&&$()});a()&&a().length>0?ne(a()):$();window.addEventListener("load",()=>{setTimeout(()=>{ae()},350)});const q=document.querySelector(".loader");function re(){q.classList.remove("visually-hidden")}function ae(){q.classList.add("visually-hidden")}re();const A=document.querySelector(".support.container-s");A||console.error("Parent container not found.");const ce=9;let S=0;const le=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/support/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/support/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/support/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/support/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/support/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/support/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/support/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/support/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/support/serhiy-prytula-charity-foundation@2x.png"}],b=document.createElement("div");b.classList.add("swiper-container");const g=document.createElement("div");g.classList.add("swiper-wrapper");g.id="swiper-wrapper";function de(e){const t=document.createElement("div");t.classList.add("swiper-slide");const o=(S+1).toString().padStart(2,"0"),n=document.createElement("a");n.classList.add("link-s"),n.href=e.url,n.target="_blank";const s=document.createElement("img");s.classList.add("img-s"),s.src=e.img,s.alt=e.title,n.appendChild(s),t.appendChild(document.createTextNode(`${o} `)),t.appendChild(n),g.appendChild(t),S++}le.slice(0,ce).forEach(e=>{de(e)});b.appendChild(g);A.appendChild(b);const ue=document.createElement("div");ue.classList.add("swiper-button-next");function pe(){window.scrollTo({top:0,behavior:"smooth"})}const u=document.querySelector(".top-btn");u.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?u.style.display="inline-flex":u.style.display="none"});u.addEventListener("click",pe);
//# sourceMappingURL=commonHelpers.js.map
