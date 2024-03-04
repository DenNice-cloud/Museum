var e,i=document.querySelector(".swiper");function t(){window.innerWidth<=1024&&"false"===i.dataset.slider&&(// eslint-disable-next-line no-undef
e=new Swiper(".swiper",{slidesPerView:1,spaceBetween:15,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},width:280,breakpoints:{640:{slidesPerView:1,spaceBetween:20,width:340}}}),i.dataset.slider="true"),window.innerWidth>1024&&(i.dataset.slider="false",i.classList.contains("swiper-initialized")&&e.destroy())}t(),window.addEventListener("resize",function(){return t()}),e.slideNext();//# sourceMappingURL=index.ad942ebe.js.map

//# sourceMappingURL=index.ad942ebe.js.map
