import{i as j,a as g}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const v={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};v.openBurgerBtn.addEventListener("click",A);v.closeBurgerBtn.addEventListener("click",A);function A(){v.burger.classList.toggle("is-hidden")}function p(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(o){e==="dark"?o.checked=!0:o.checked=!1})}const T=localStorage.getItem("theme");p(T||"light");const D=document.querySelectorAll('.common-toggle input[type="checkbox"]');D.forEach(function(e){e.addEventListener("change",function(t){t.target.checked?p("dark"):p("light")},!1)});const q=document.querySelector('.toggle-theme input[type="checkbox'),f=localStorage.getItem("theme");f&&(document.documentElement.setAttribute("data-theme",f),f==="dark"&&(q.checked=!0));q.addEventListener("change",U,!1);function U(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function I(e){return e.map(o=>{const{_id:s,book_image:n,title:r,author:a}=o;return`<li class="books-box-itm" id="${s}">
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
            </li>`}).join("")}const J=(e,t)=>{if(!e||e.length===0){O("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers <span class="books-title-span"> Books</span></h2>${e.map(s=>{const n=s.list_name,r=I(s.books.slice(0,t));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${n}</h3>
         <ul class="books-box-list">${r}</ul>
           <button data-categoryName="${n}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},K=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-itm"><a href="#" data-categoryName="${o.list_name}">${o.list_name}</a></li>`).join("")}`,Y=(e,t)=>{if(!e||e.length===0){O("Sorry, category of book not found");return}else{const o=I(e),s=t.split(" "),n=s[s.length-1];return`<h2 class="books-box-title">
   ${s.slice(0,-1).join(" ")} 
   <span class="books-title-span">${n}</span>
 </h2>
 <div class="books-category-box">
   <ul class="books-category-list">${o}</ul>
 </div>`}};function O(e){j.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const m="https://books-backend.p.goit.global",G=async e=>{const o=m+"/books/top-books/";try{const s=await g.get(o);return J(s.data,e)}catch(s){return console.error("Error fetching top books:",s),""}},F=async()=>{const t=m+"/books/category-list/";try{const o=await g.get(t);return K(o.data)}catch(o){console.error("Error fetching category list:",o)}},Z=async e=>{const o=m+"/books/category/",s={category:e};try{const n=await g.get(o,{params:s});return Y(n.data,e)}catch(n){console.error("Error fetching books by category:",n)}},M=async e=>{const t=`/books/${e}`,o=m+t;try{return(await g.get(o)).data}catch(s){console.error("Error fetching books id:",s)}},Q="/JavaScript_PG-5/assets/sprite-eb1087d7.svg",V="addBook";function X(e){const t=JSON.parse(localStorage.getItem(V)),o=t&&t.some(s=>s._id===e._id);return`
      
      <div class="modal-content">
        <button
        class="modal-close-btn modal-close-btn-js"
        type="button">
        <svg class="close-btn-icon" width="16" height="16">
          <use href="${Q}#icon-x-close-black"></use>
          
        </svg>
      </button>
        <img class="modal-img" src="${e.book_image}" alt="cover" width = "192">

        <div class="modal-info">
          <h2 class="modal-title">${e.list_name}</h2>
          <p class="modal-author">${e.author}</p>
          <p class="modal-description">${e.description}</p>

          ${ee(e.buy_links)} 
        </div>
      </div>
    
    <div class="modal-buttons">
      <button class="modal-button-shopping-list" type="button" data-id="${e._id}">
      ${o?"Remove from shopping list":"Add to shopping list"} 
      
      </button>
      <p class="modal-message ${o?"":"hidden"}">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        
      
      
    </div>

    
    
  `}function ee(e){var o;const t={amazon:"Amazon",appleBooks:"Apple Books"};for(const[s,n]of Object.entries(t))t[s]=(o=e.find(r=>r.name===n))==null?void 0:o.url;return`
    <ul class="marketplace-list">
        ${t.amazon?`<li class="marketplace-list-item">
              <a href="${t.amazon}" >
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
        ${t.appleBooks?`<li class="marketplace-list-item">
              <a href="${t.appleBooks}" >
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
          </ul>`}const _="addBook";let i;async function te(e){const t=e.target.closest("button");try{if(t.classList.contains("modal-button-shopping-list")){i=JSON.parse(localStorage.getItem(_))||[];const o=await M(t.dataset.id),s=i.some(n=>n._id===o._id);console.log(i,s),s?i=i.filter(n=>n._id!==o._id):i.push(o),localStorage.setItem(_,JSON.stringify(i))}}catch(o){console.log(o.message)}}const oe=document.querySelector(".modal-js"),se=document.querySelector(".backdrop");let k,y;se.addEventListener("click",ie);async function ne(e){const t=await M(e),o=X(t);oe.innerHTML=o,re(),k=document.querySelector(".modal-button-shopping-list"),y=document.querySelector(".modal-close-btn-js"),k.addEventListener("click",R),y.addEventListener("click",z),console.log(o)}function re(){document.body.classList.add("show-modal"),window.addEventListener("keydown",H)}function S(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",H),k.removeEventListener("click",R),y.removeEventListener("click",z)}function R(e){const t="addBook";te(e);const o=e.target.closest("button");if(!o.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(t))||[]).some(r=>r._id===o.dataset.id)?o.textContent="Add to shopping list":o.textContent="Remove from shopping list",o.nextElementSibling.classList.toggle("hidden")}function z(e){S()}function ie(e){e.currentTarget===e.target&&S()}function H(e){console.log(e),e.key==="Escape"&&S()}const b={default:3,largeScreen:5,smallScreen:1};function L(e){return e>=1440?b.largeScreen:e<768?b.smallScreen:b.default}const ce=window.innerWidth;let w=L(ce);window.addEventListener("resize",()=>{const e=window.innerWidth;w=L(e)});async function E(){const e=document.querySelector(".categories-list"),t=await F();return e.innerHTML=t,e.addEventListener("click",ae),e}async function ae(e){e.preventDefault();const t=e.target;if(!t.closest(".categories-itm"))return;const s=t.dataset.categoryname,n=await E();W(n,s),s==="all categories"?P():await N(n,s)}document.addEventListener("click",le);async function le(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const t=e.target.dataset.categoryname;await N(null,t),window.scrollTo({top:0,behavior:"smooth"});const o=await E();W(o,t)}}async function N(e,t){try{const o=document.querySelector(".books-box");if(!o){console.error("Element not found.");return}const s=await Z(t);o.innerHTML=s}catch(o){console.error("Error displaying books by category:",o)}finally{}}async function P(){try{const e=document.querySelector(".books-box"),t=window.innerWidth;w=L(t);const s=await G(w);e.innerHTML=s}catch(e){console.error("Error displaying top books:",e)}finally{}}window.addEventListener("load",()=>{P(),E()});function W(e,t){e.querySelectorAll(".categories-itm").forEach(s=>{s.firstElementChild.dataset.categoryname===t?s.classList.add("js-categories-current"):s.classList.remove("js-categories-current")})}document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelectorAll(".books-box-list");console.log(e),e.forEach(t=>{console.log(t),t.classList.contains(".books-box-itm")?t.addEventListener("click",()=>{const o=t.id;console.log("Click"),ne(o)}):console.error('Error: Element does not have class "books-box-itm"')})});window.addEventListener("load",()=>{setTimeout(()=>{},350)});document.querySelector(".loader");const x=document.querySelector(".support.container-s");x||console.error("Parent container not found.");let $=0;const de=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/support/save-the-children.png",resolution:"../img/support/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/support/project-hope.png",resolution:"../img/support/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/support/united.png",resolution:"../img/support/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/support/international-medical-corps.png",resolution:"../img/support/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/support/medicins-sans-frontieres.png",resolution:"../img/support/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/support/razom.png",resolution:"../img/support/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/support/action-ageinst-hunger.png",resolution:"../img/support/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/support/world-vision.png",resolution:"../img/support/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/support/sergiy-prytula.png",resolution:"../img/support/serhiy-prytula-charity-foundation@2x.png"}],C=document.createElement("div");C.classList.add("swiper-container");const h=document.createElement("div");h.classList.add("swiper-wrapper");h.id="swiper-wrapper";function pe(e){const t=document.createElement("div");t.classList.add("swiper-slide");const o=($+1).toString().padStart(2,"0"),s=document.createElement("a");s.classList.add("link-s"),s.href=e.url,s.target="_blank";const n=document.createElement("img");n.classList.add("img-s"),n.setAttribute("srcset",`${e.img}, ${e.resolution} 2x`),n.alt=e.title,s.appendChild(n);const r=document.createElement("span");r.classList.add("charity-index"),r.textContent=o,t.appendChild(r),t.appendChild(s),h.appendChild(t),$++}de.forEach(e=>{pe(e)});C.appendChild(h);x.appendChild(C);const B=document.createElement("div");B.classList.add("button-con");const l=document.createElement("label");l.classList.add("container-btn");l.classList.add("btn-s");const c=document.createElement("input");c.setAttribute("type","checkbox");c.checked=!0;c.setAttribute("hidden",!0);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("viewBox","0 0 512 512");d.setAttribute("height","1em");d.classList.add("chevron-down");d.innerHTML='<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>';l.appendChild(c);l.appendChild(d);B.appendChild(l);x.appendChild(B);c.addEventListener("change",()=>{const e=document.querySelector(".swiper-wrapper"),t=document.querySelector(".chevron-down");c.checked?t.style.transform="":t.style.transform="rotate(-180deg)",(e.scrollTop<=0?"down":"up")==="down"?e.scrollTop+e.clientHeight>=e.scrollHeight?e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop<=0?e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});function ue(){window.scrollTo({top:0,behavior:"smooth"})}const u=document.querySelector(".top-btn");u.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?u.style.display="inline-flex":u.style.display="none"});u.addEventListener("click",ue);
//# sourceMappingURL=main-db830a3b.js.map
