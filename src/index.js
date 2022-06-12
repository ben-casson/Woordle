import './styles/style.scss';
import { themeButton } from './theme.js';
import { newWordsArray, randomArrayShuffle } from './script.js';

// console.log(newWordsArray);
// randomArrayShuffle(newWordsArray);
// console.log(newWordsArray);




themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});

// const siteContainer = document.getElementById("site-container");
// siteContainer.style.height = window.innerHeight + "px";
// window.addEventListener('resize', () => {
//     siteContainer.style.height = window.innerHeight + "px";
// });


//document.style is undefined
// document.style.height = window.innerHeight + "px";
// document.style.width = window.innerWidth + "px";

//on page load - display instructions if local storage is empty
