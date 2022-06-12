import './assets/style.scss';
import { themeButton } from './theme.js';

themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});

// const siteContainer = document.getElementById("site-container");
// siteContainer.style.height = window.innerHeight + "px";
// window.addEventListener('resize', () => {
//     siteContainer.style.height = window.innerHeight + "px";
// });




//on page load - display instructions if local storage is empty
