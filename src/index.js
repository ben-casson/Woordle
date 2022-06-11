import './assets/style.scss';
import { themeButton } from './theme.js';

themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});
//on page load - display instructions if local storage is empty
