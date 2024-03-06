import{a as I,i as N}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const k={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};k.openBurgerBtn.addEventListener("click",T);k.closeBurgerBtn.addEventListener("click",T);function T(){k.burger.classList.toggle("is-hidden")}function d(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(o){e==="dark"?o.checked=!0:o.checked=!1})}const L=localStorage.getItem("theme");d(L||"light");const j=document.querySelectorAll('.common-toggle input[type="checkbox"]');j.forEach(function(e){e.addEventListener("change",function(t){t.target.checked?d("dark"):d("light")},!1)});const x=document.querySelector('.toggle-theme input[type="checkbox'),h=localStorage.getItem("theme");h&&(document.documentElement.setAttribute("data-theme",h),h==="dark"&&(x.checked=!0));x.addEventListener("change",H,!1);function H(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function B(e){return e.map(o=>{const{_id:n,book_image:s,title:i,author:a}=o;return`<li class="books-box-itm" id="${n}">
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
              <p class="books-box-desc-author">${a}</p>
            </div> 
            </li>`}).join("")}const P=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(n=>{const s=n.list_name,i=B(n.books.slice(0,t));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
        <ul class="books-box-list">${i}</ul>
        <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}</div>`,R=e=>`<li class="categories-itm js-categories-current "><a href="#" data-categoryName="">All categories</a></li>${e.map(o=>`<li class="categories-itm"><a href="#" data-categoryName="${o.list_name}">${o.list_name}</a></li>`).join("")}`,z=e=>e.map(o=>{const n=B(o);return`<div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${o.list_name}</h2>
      <ul class="books-category-list">${n}</ul>
    </div>`}).join(""),D="https://books-backend.p.goit.global",p=async(e,t=null)=>{const o=`${D}/books${e}`;try{return(await I.get(o,{params:t})).data}catch(n){console.log(n)}},W=async e=>{const t=await p("/top-books/");return P(t,e)},F=async()=>{const e=await p("/category-list/");return R(e)},J=async(e="")=>{const t=await p("/category/",{category:e});return z(t)},K=async e=>p(`/${e}`),y=document.querySelector(".books-box"),l=document.querySelector(".categories-list"),f={default:3,largeScreen:5,smallScreen:1};async function q(e){y.innerHTML=e;const t=document.querySelector(".books-box-desc-title");t&&Y(t)}async function U(){const e=await F();l.innerHTML=e}async function _(){const e=window.innerWidth,t=G(e),o=await W(t);q(o)}async function $(e){const t=await J(e);return q(t)}function Y(e){const t=e.textContent.split(" "),o=t.pop(),n=t.join(" ")+(t.length>0?` <span class="books-title-color">${o}</span>`:o);e.innerHTML=n}function G(e){return e>=1440?f.largeScreen:e<768?f.smallScreen:f.default}y&&(_(),U(),l.addEventListener("click",Z),y.addEventListener("click",Q));function Z(e){e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.categoryName;l.querySelector(".js-categories-current").classList.remove("js-categories-current"),t.classList.add("js-categories-current"),o===""?_():$(o)}}function Q(e){e.preventDefault();const t=e.target;if(t.classList.contains("books-btn-see-more")){const o=t.dataset.categoryName;l.querySelector(".js-categories-current").classList.remove("js-categories-current"),l.querySelector(`[data-categoryName="${o}"]`).classList.add("js-categories-current"),$(o)}}const C="addBook";let r;async function V(e){const t=e.target.closest("button");try{if(t.classList.contains("modal-button-shopping-list")){r=JSON.parse(localStorage.getItem(C))||[];const o=await K(t.dataset.id),n=r.some(s=>s._id===o._id);console.log(r,n),n?r=r.filter(s=>s._id!==o._id):r.push(o),localStorage.setItem(C,JSON.stringify(r))}}catch(o){console.log(o.message)}}document.querySelector(".modal-js");const X=document.querySelector(".backdrop");let ee,te;X.addEventListener("click",ne);function b(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",ie),ee.removeEventListener("click",oe),te.removeEventListener("click",se)}function oe(e){const t="addBook";V(e);const o=e.target.closest("button");if(!o.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(t))||[]).some(i=>i._id===o.dataset.id)?o.textContent="Add to shopping list":o.textContent="Remove from shopping list",o.nextElementSibling.classList.toggle("hidden")}function se(e){b()}function ne(e){e.currentTarget===e.target&&b()}function ie(e){console.log(e),e.key==="Escape"&&b()}const A=document.querySelector(".shopping-list-title");function c(){return JSON.parse(localStorage.getItem("addBook"))}function re(e){ce();const t=c().map(o=>`<li class="shoppinglist-book" id="${o._id}">
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
        </li>`).join("");A.insertAdjacentHTML("afterend",'<ul class="books"></ul>'),document.querySelector(".books").innerHTML=t}function M(){document.querySelector(".books")&&document.querySelector(".books").remove();const e=`<p class="shopping-list-text">
            This page is empty, add some books and proceed to order.
          </p>
              <img
                class="shopping-list-img"
                src="./img/books.png"
                alt="a lot of books"
              />`;A.insertAdjacentHTML("afterend",e),N.info({message:"The list of books is empty.",timeout:3e3,position:"topRight"})}function ce(){document.querySelector(".shopping-list-img")&&(document.querySelector(".shopping-list-img").remove(),document.querySelector(".shopping-list-text").remove())}document.querySelector(".shopping-list").addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName=="BUTTON"){const t=e.target.closest("li").getAttribute("id");console.log(t);const o=c().filter(s=>s._id!==t);addtoLS(o),document.querySelector(`li[id="${t}"]`).remove()}c().length===0&&M()});c()&&c().length>0?re(c()):M();window.addEventListener("load",()=>{setTimeout(()=>{le()},350)});const O=document.querySelector(".loader");function ae(){O.classList.remove("visually-hidden")}function le(){O.classList.add("visually-hidden")}ae();const w=document.querySelector(".support.container-s");w||console.error("Parent container not found.");let E=0;const de=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@2x.png"}],v=document.createElement("div");v.classList.add("swiper-container");const g=document.createElement("div");g.classList.add("swiper-wrapper");g.id="swiper-wrapper";function ue(e){const t=document.createElement("div");t.classList.add("swiper-slide");const o=(E+1).toString().padStart(2,"0"),n=document.createElement("a");n.classList.add("link-s"),n.href=e.url,n.target="_blank";const s=document.createElement("img");s.classList.add("img-s"),s.src=e.img,s.alt=e.title,n.appendChild(s);const i=document.createElement("span");i.classList.add("charity-index"),i.textContent=o,t.appendChild(i),t.appendChild(n),g.appendChild(t),E++}de.forEach(e=>{ue(e)});v.appendChild(g);w.appendChild(v);const S=document.createElement("div");S.classList.add("button-con");const m=document.createElement("button");m.classList.add("btn-s");m.innerHTML='<svg class="icon-s arrow-s" width="20" height="13" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';S.appendChild(m);w.appendChild(S);m.addEventListener("click",()=>{const e=document.querySelector(".swiper-wrapper"),t=document.querySelector(".btn-s");e.scrollTop+e.clientHeight>=e.scrollHeight,t.style.transform="rotate(180deg)",(e.scrollTop<=0?"down":"up")==="down"?e.scrollTop+e.clientHeight>=e.scrollHeight?e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop<=0?e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});function pe(){window.scrollTo({top:0,behavior:"smooth"})}const u=document.querySelector(".top-btn");u.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?u.style.display="inline-flex":u.style.display="none"});u.addEventListener("click",pe);
//# sourceMappingURL=commonHelpers.js.map
