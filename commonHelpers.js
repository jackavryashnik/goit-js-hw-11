import{S as p,i as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const n=document.querySelector(".search-input"),d=document.querySelector(".search-btn"),o=document.querySelector(".gallery"),c={key:"41300766-2a2685b0426849001fa971f21",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},y={overlayOpacity:.8,captionsData:"alt",captionDelay:250};new p(".gallery a",y);let u="https://pixabay.com/api/?";const g=a=>{fetch(a).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(!t.hits[0]){f.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML="";return}L(t)}).catch(t=>{console.log(t)})};d.addEventListener("click",a=>{a.preventDefault(),o.innerHTML='<span class="loader"></span>',c.q=n.value,u+=new URLSearchParams(c),n.value="",g(u)});const L=a=>{let t=a.hits.map(({webformatURL:i,largeImageURL:r,tags:e,likes:s,views:l,comments:h,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href=${r}>
          <img class="gallery-image" src=${i} data-source=${r} alt="${e}" width="360" height="200"/>
          <ul class="image-stats">
            <li class="stats-item"><h3 class="stat-title">Likes</h3><p class="stat-value">${s}</p></li>
            <li class="stats-item"><h3 class="stat-title">Views</h3><p class="stat-value">${l}</p></li>
            <li class="stats-item"><h3 class="stat-title">Comments</h3><p class="stat-value">${h}</p></li>
            <li class="stats-item"><h3 class="stat-title">Downloads</h3><p class="stat-value">${m}</p></li>
          </ul>  
          </a>
        </li>`).join("");o.innerHTML=t};
//# sourceMappingURL=commonHelpers.js.map
