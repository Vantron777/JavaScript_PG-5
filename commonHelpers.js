import{i as q,a as m}from"./assets/vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const w={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};w.openBurgerBtn.addEventListener("click",A);w.closeBurgerBtn.addEventListener("click",A);function A(){w.burger.classList.toggle("is-hidden")}function p(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(t){e==="dark"?t.checked=!0:t.checked=!1})}const B=localStorage.getItem("theme");p(B||"light");const P=document.querySelectorAll('.common-toggle input[type="checkbox"]');P.forEach(function(e){e.addEventListener("change",function(o){o.target.checked?p("dark"):p("light")},!1)});const $=document.querySelector('.toggle-theme input[type="checkbox'),y=localStorage.getItem("theme");y&&(document.documentElement.setAttribute("data-theme",y),y==="dark"&&($.checked=!0));$.addEventListener("change",W,!1);function W(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function I(e){return e.map(t=>{const{_id:s,book_image:n,title:r,author:l}=t;return`<li class="books-box-itm" id="${s}">
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
              <p class="books-box-desc-author">${l}</p>
            </div> 
            </li>`}).join("")}const z=(e,o)=>{if(!e||e.length===0){M("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers <span class="books-title-span"> Books</span></h2>${e.map(s=>{const n=s.list_name,r=I(s.books.slice(0,o));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${n}</h3>
         <ul class="books-box-list">${r}</ul>
           <button data-categoryName="${n}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},U=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((t,s)=>t.list_name<s.list_name?-1:t.list_name>s.list_name?1:0).map(t=>`<li class="categories-itm"><a href="#" data-categoryName="${t.list_name}">${t.list_name}</a></li>`).join("")}`,D=(e,o)=>{if(!e||e.length===0){M("Sorry, category of book not found");return}else{const t=I(e),s=o.split(" "),n=s[s.length-1];return`<h2 class="books-box-title">
   ${s.slice(0,-1).join(" ")} 
   <span class="books-title-span">${n}</span>
 </h2>
 <div class="books-category-box">
   <ul class="books-category-list">${t}</ul>
 </div>`}};function M(e){q.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const h="https://books-backend.p.goit.global",J=async e=>{const t=h+"/books/top-books/";try{const s=await m.get(t);return z(s.data,e)}catch(s){return console.error("Error fetching top books:",s),""}},K=async()=>{const o=h+"/books/category-list/";try{const t=await m.get(o);return U(t.data)}catch(t){console.error("Error fetching category list:",t)}},F=async e=>{const t=h+"/books/category/",s={category:e};try{const n=await m.get(t,{params:s});return D(n.data,e)}catch(n){console.error("Error fetching books by category:",n)}},Y=async e=>{const o=`/books/${e}`,t=h+o;try{return(await m.get(t)).data}catch(s){console.error("Error fetching books id:",s)}},b={default:3,largeScreen:5,smallScreen:1};function S(e){return e>=1440?b.largeScreen:e<768?b.smallScreen:b.default}const G=window.innerWidth;let k=S(G);window.addEventListener("resize",()=>{const e=window.innerWidth;k=S(e)});async function v(){const e=document.querySelector(".categories-list"),o=await K();return e.innerHTML=o,e.addEventListener("click",Z),e}async function Z(e){e.preventDefault();const o=e.target;if(!o.closest(".categories-itm"))return;const s=o.dataset.categoryname,n=await v();N(n,s),s==="all categories"?H():await O(n,s)}document.addEventListener("click",Q);async function Q(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const o=e.target.dataset.categoryname;await O(null,o),window.scrollTo({top:0,behavior:"smooth"});const t=await v();N(t,o)}}async function O(e,o){try{const t=document.querySelector(".books-box");if(!t){console.error("Element not found.");return}const s=await F(o);t.innerHTML=s}catch(t){console.error("Error displaying books by category:",t)}finally{}}async function H(){try{const e=document.querySelector(".books-box"),o=window.innerWidth;k=S(o);const s=await J(k);e.innerHTML=s}catch(e){console.error("Error displaying top books:",e)}finally{}}window.addEventListener("load",()=>{H(),v()});function N(e,o){e.querySelectorAll(".categories-itm").forEach(s=>{s.firstElementChild.dataset.categoryname===o?s.classList.add("js-categories-current"):s.classList.remove("js-categories-current")})}const T="addBook";let i;async function V(e){const o=e.target.closest("button");try{if(o.classList.contains("modal-button-shopping-list")){i=JSON.parse(localStorage.getItem(T))||[];const t=await Y(o.dataset.id),s=i.some(n=>n._id===t._id);console.log(i,s),s?i=i.filter(n=>n._id!==t._id):i.push(t),localStorage.setItem(T,JSON.stringify(i))}}catch(t){console.log(t.message)}}document.querySelector(".modal-js");const X=document.querySelector(".backdrop");let ee,te;X.addEventListener("click",ne);function L(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",re),ee.removeEventListener("click",oe),te.removeEventListener("click",se)}function oe(e){const o="addBook";V(e);const t=e.target.closest("button");if(!t.classList.contains("modal-button-shopping-list"))return;(JSON.parse(localStorage.getItem(o))||[]).some(r=>r._id===t.dataset.id)?t.textContent="Add to shopping list":t.textContent="Remove from shopping list",t.nextElementSibling.classList.toggle("hidden")}function se(e){L()}function ne(e){e.currentTarget===e.target&&L()}function re(e){console.log(e),e.key==="Escape"&&L()}const j=document.querySelector(".shopping-list-title");function c(){return JSON.parse(localStorage.getItem("addBook"))}function ie(e){ce();const o=c().map(t=>`<li class="shoppinglist-book" id="${t._id}">
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
        </li>`).join("");j.insertAdjacentHTML("afterend",'<ul class="books"></ul>'),document.querySelector(".books").innerHTML=o}function R(){document.querySelector(".books")&&document.querySelector(".books").remove();const e=`<p class="shopping-list-text">
            This page is empty, add some books and proceed to order.
          </p>
              <img
                class="shopping-list-img"
                src="./img/books.png"
                alt="a lot of books"
              />`;j.insertAdjacentHTML("afterend",e),q.info({message:"The list of books is empty.",timeout:3e3,position:"topRight"})}function ce(){document.querySelector(".shopping-list-img")&&(document.querySelector(".shopping-list-img").remove(),document.querySelector(".shopping-list-text").remove())}document.querySelector(".shopping-list").addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName=="BUTTON"){const o=e.target.closest("li").getAttribute("id");console.log(o);const t=c().filter(n=>n._id!==o);addtoLS(t),document.querySelector(`li[id="${o}"]`).remove()}c().length===0&&R()});c()&&c().length>0?ie(c()):R();window.addEventListener("load",()=>{setTimeout(()=>{},350)});document.querySelector(".loader");const E=document.querySelector(".support.container-s");E||console.error("Parent container not found.");let _=0;const ae=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@2x.png"}],C=document.createElement("div");C.classList.add("swiper-container");const f=document.createElement("div");f.classList.add("swiper-wrapper");f.id="swiper-wrapper";function le(e){const o=document.createElement("div");o.classList.add("swiper-slide");const t=(_+1).toString().padStart(2,"0"),s=document.createElement("a");s.classList.add("link-s"),s.href=e.url,s.target="_blank";const n=document.createElement("img");n.classList.add("img-s"),n.src=e.img,n.alt=e.title,s.appendChild(n);const r=document.createElement("span");r.classList.add("charity-index"),r.textContent=t,o.appendChild(r),o.appendChild(s),f.appendChild(o),_++}ae.forEach(e=>{le(e)});C.appendChild(f);E.appendChild(C);const x=document.createElement("div");x.classList.add("button-con");const d=document.createElement("label");d.classList.add("container-btn");d.classList.add("btn-s");const a=document.createElement("input");a.setAttribute("type","checkbox");a.checked=!0;a.setAttribute("hidden",!0);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("viewBox","0 0 512 512");u.setAttribute("height","1em");u.classList.add("chevron-down");u.innerHTML='<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>';d.appendChild(a);d.appendChild(u);x.appendChild(d);E.appendChild(x);a.addEventListener("change",()=>{const e=document.querySelector(".swiper-wrapper"),o=document.querySelector(".chevron-down");a.checked?o.style.transform="":o.style.transform="rotate(-180deg)",(e.scrollTop<=0?"down":"up")==="down"?e.scrollTop+e.clientHeight>=e.scrollHeight?e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop<=0?e.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:e.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});function de(){window.scrollTo({top:0,behavior:"smooth"})}const g=document.querySelector(".top-btn");g.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?g.style.display="inline-flex":g.style.display="none"});g.addEventListener("click",de);
//# sourceMappingURL=commonHelpers.js.map
