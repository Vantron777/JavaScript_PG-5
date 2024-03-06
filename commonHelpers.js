import{i as x,a as u}from"./assets/vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const k={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};k.openBurgerBtn.addEventListener("click",_);k.closeBurgerBtn.addEventListener("click",_);function _(){k.burger.classList.toggle("is-hidden")}function l(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(t){e==="dark"?t.checked=!0:t.checked=!1})}const E=localStorage.getItem("theme");l(E||"light");const R=document.querySelectorAll('.common-toggle input[type="checkbox"]');R.forEach(function(e){e.addEventListener("change",function(o){o.target.checked?l("dark"):l("light")},!1)});const q=document.querySelector('.toggle-theme input[type="checkbox'),h=localStorage.getItem("theme");h&&(document.documentElement.setAttribute("data-theme",h),h==="dark"&&(q.checked=!0));q.addEventListener("change",P,!1);function P(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function $(e){return e.map(t=>{const{_id:s,book_image:n,title:r,author:a}=t;return`<li class="books-box-itm" id="${s}">
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
            </li>`}).join("")}const W=(e,o)=>{if(!e||e.length===0){A("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers <span class="books-title-span"> Books</span></h2>${e.map(s=>{const n=s.list_name,r=$(s.books.slice(0,o));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${n}</h3>
         <ul class="books-box-list">${r}</ul>
           <button data-categoryName="${n}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},z=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((t,s)=>t.list_name<s.list_name?-1:t.list_name>s.list_name?1:0).map(t=>`<li class="categories-itm"><a href="#" data-categoryName="${t.list_name}">${t.list_name}</a></li>`).join("")}`,D=(e,o)=>{if(!e||e.length===0){A("Sorry, category of book not found");return}else{const t=$(e),s=o.split(" "),n=s[s.length-1];return`<h2 class="books-box-title">
   ${s.slice(0,-1).join(" ")} 
   <span class="books-title-span">${n}</span>
 </h2>
 <div class="books-category-box">
   <ul class="books-category-list">${t}</ul>
 </div>`}};function A(e){x.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const p="https://books-backend.p.goit.global",U=async e=>{const t=p+"/books/top-books/";try{const s=await u.get(t);return W(s.data,e)}catch(s){return console.error("Error fetching top books:",s),""}},F=async()=>{const o=p+"/books/category-list/";try{const t=await u.get(o);return z(t.data)}catch(t){console.error("Error fetching category list:",t)}},J=async e=>{const t=p+"/books/category/",s={category:e};try{const n=await u.get(t,{params:s});return D(n.data,e)}catch(n){console.error("Error fetching books by category:",n)}},K=async e=>{const o=`/books/${e}`,t=p+o;try{return(await u.get(t)).data}catch(s){console.error("Error fetching books id:",s)}},f={default:3,largeScreen:5,smallScreen:1};function b(e){return e>=1440?f.largeScreen:e<768?f.smallScreen:f.default}const Y=window.innerWidth;let y=b(Y);window.addEventListener("resize",()=>{const e=window.innerWidth;y=b(e)});async function w(){const e=document.querySelector(".categories-list"),o=await F();return e.innerHTML=o,e.addEventListener("click",G),e}async function G(e){e.preventDefault();const o=e.target;if(!o.closest(".categories-itm"))return;const s=o.dataset.categoryname,n=await w();O(n,s),s==="all categories"?M():await I(n,s)}document.addEventListener("click",Z);async function Z(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const o=e.target.dataset.categoryname;await I(null,o),window.scrollTo({top:0,behavior:"smooth"});const t=await w();O(t,o)}}async function I(e,o){try{const t=document.querySelector(".books-box");if(!t){console.error("Element not found.");return}const s=await J(o);t.innerHTML=s}catch(t){console.error("Error displaying books by category:",t)}finally{}}async function M(){try{const e=document.querySelector(".books-box"),o=window.innerWidth;y=b(o);const s=await U(y);e.innerHTML=s}catch(e){console.error("Error displaying top books:",e)}finally{}}window.addEventListener("load",()=>{M(),w()});function O(e,o){e.querySelectorAll(".categories-itm").forEach(s=>{s.firstElementChild.dataset.categoryname===o?s.classList.add("js-categories-current"):s.classList.remove("js-categories-current")})}const T="addBook";let i;async function Q(e){const o=e.target.closest("button");try{if(o.classList.contains("modal-button-shopping-list")){i=JSON.parse(localStorage.getItem(T))||[];const t=await K(o.dataset.id),s=i.some(n=>n._id===t._id);console.log(i,s),s?i=i.filter(n=>n._id!==t._id):i.push(t),localStorage.setItem(T,JSON.stringify(i))}}catch(t){console.log(t.message)}}document.querySelector(".modal-js");const V=document.querySelector(".backdrop");let X,ee;V.addEventListener("click",se);function v(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",ne),X.removeEventListener("click",te),ee.removeEventListener("click",oe)}function te(e){const o="addBook";Q(e);const t=e.target.closest("button");if(!t.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(o))||[]).some(r=>r._id===t.dataset.id)?t.textContent="Add to shopping list":t.textContent="Remove from shopping list",t.nextElementSibling.classList.toggle("hidden")}function oe(e){v()}function se(e){e.currentTarget===e.target&&v()}function ne(e){console.log(e),e.key==="Escape"&&v()}const H=document.querySelector(".shopping-list-title");function c(){return JSON.parse(localStorage.getItem("addBook"))}function re(e){ie();const o=c().map(t=>`<li class="shoppinglist-book" id="${t._id}">
          <img
            class="shoppinglist-book-image"
            src="${t.book_image}"
            alt="book image"
          />
          <div class="shoppinglist-total-div">
            <div class="shoppinglist-tb-div">
              <div class="shoppinglist-titcat-div">
                <h3 class="shoppinglist-book-title">${t.title}</h3>
                <p class="shoppinglist-book-category">${t.list_name}</p>
              </div>

              <button
                type="button"
                class="shoppinglist-book-deletebutton"
              ></button>
            </div>

            <div class="shoppinglist-desauthorlink">
              <p class="shoppinglist-book-description">${t.description}</p>

              <div class="shoppinglist-low-div">
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
                        src="./img/amazon.png"
                        alt="logoAmazon"
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
                        src="./img/apple.png"
                        alt="logo Apple books"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>`).join("");H.insertAdjacentHTML("afterend",'<ul class="books"></ul>'),document.querySelector(".books").innerHTML=o}function N(){document.querySelector(".books")&&document.querySelector(".books").remove();const e=`<p class="shopping-list-text">
            This page is empty, add some books and proceed to order.
          </p>
              <img
                class="shopping-list-img"
                src="./img/books.png"
                alt="a lot of books"
              />`;H.insertAdjacentHTML("afterend",e),x.info({message:"The list of books is empty.",timeout:3e3,position:"topRight"})}function ie(){document.querySelector(".shopping-list-img")&&(document.querySelector(".shopping-list-img").remove(),document.querySelector(".shopping-list-text").remove())}document.querySelector(".shopping-list").addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName=="BUTTON"){const o=e.target.closest("li").getAttribute("id");console.log(o);const t=c().filter(n=>n._id!==o);addtoLS(t),document.querySelector(`li[id="${o}"]`).remove()}c().length===0&&N()});c()&&c().length>0?re(c()):N();window.addEventListener("load",()=>{setTimeout(()=>{ae()},350)});const j=document.querySelector(".loader");function ce(){j.classList.remove("visually-hidden")}function ae(){j.classList.add("visually-hidden")}ce();const S=document.querySelector(".support.container-s");S||console.error("Parent container not found.");let B=0;const le=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@2x.png"}],C=document.createElement("div");C.classList.add("swiper-container");const g=document.createElement("div");g.classList.add("swiper-wrapper");g.id="swiper-wrapper";function de(e){const o=document.createElement("div");o.classList.add("swiper-slide");const t=(B+1).toString().padStart(2,"0"),s=document.createElement("a");s.classList.add("link-s"),s.href=e.url,s.target="_blank";const n=document.createElement("img");n.classList.add("img-s"),n.src=e.img,n.alt=e.title,s.appendChild(n);const r=document.createElement("span");r.classList.add("charity-index"),r.textContent=t,o.appendChild(r),o.appendChild(s),g.appendChild(o),B++}le.forEach(e=>{de(e)});C.appendChild(g);S.appendChild(C);const L=document.createElement("div");L.classList.add("button-con");const m=document.createElement("button");m.classList.add("btn-s");m.innerHTML='<svg class="icon-s arrow-s" width="20" height="13" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';L.appendChild(m);S.appendChild(L);m.addEventListener("click",()=>{const e=document.querySelector(".swiper-wrapper"),o=document.querySelector(".btn-s");e.scrollTop+e.clientHeight>=e.scrollHeight,o.style.transform="rotate(180deg)",(e.scrollTop<=0?"down":"up")==="down"?e.scrollTop+e.clientHeight>=e.scrollHeight?e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop<=0?e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});function ue(){window.scrollTo({top:0,behavior:"smooth"})}const d=document.querySelector(".top-btn");d.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?d.style.display="inline-flex":d.style.display="none"});d.addEventListener("click",ue);
//# sourceMappingURL=commonHelpers.js.map
