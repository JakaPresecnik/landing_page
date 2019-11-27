/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

//defining event listeners
window.addEventListener('scroll', highlight);

//defining variables and arrays
let navList = document.querySelector('#navbar__list');
let sectionList = document.querySelectorAll('section');
let backToTop = document.querySelector('.topReturn');
let nameListItem = [];
let sectionCollection = [];

function buildNav() {
  for (let i = 0; i < sectionList.length; i++) {
// variables here are used to get the (1)text content for nav items and (2)id for anchors, also (3)added each section to Array for further use:
    let itemText = sectionList[i].getAttribute('data-nav');
    let itemId = sectionList[i].getAttribute('id');
    sectionCollection[i] = sectionList[i];
//creating (1)list items and (2)anchors and (3)setting the value, got from upper variable as href value:
    nameListItem[i] = document.createElement('li');
    let nameListItemA = document.createElement('a');
    nameListItemA.setAttribute('href', '#' + itemId);
//appending (1)text from top variable to a, (2)appending a to li, and (3)li to ul:
    nameListItemA.appendChild(document.createTextNode(itemText));
    nameListItem[i].appendChild(nameListItemA);
    navList.appendChild(nameListItem[i]);
//adding class that I found in css file:
    nameListItemA.className = 'menu__link';
  }
}

buildNav();

// function changes styling of sections when active
function highlight (e) {
//loop through section list stored in an array sectionCollection;
  for(let i = 0; i < sectionCollection.length; i++){
//checks if section has active class and saves value as a boolian:
    let containsActiveClass = sectionCollection[i].classList.contains('your-active-class');
//changes active class based on position of user screen view:
    if (!containsActiveClass) {
       if(window.scrollY >= sectionCollection[i].offsetTop - 150 && window.scrollY <= sectionCollection[i].offsetTop + 500) {
        sectionCollection[i].className = 'your-active-class';
        nameListItem[i].className = 'link_active';
      }
    }else {
      if(window.scrollY < sectionCollection[i].offsetTop - 150 || window.scrollY > sectionCollection[i].offsetTop + 500) {
       sectionCollection[i].classList.remove('your-active-class');
       nameListItem[i].classList.remove('link_active');
     }
    }
  }
//  test where the user is located and inserting "back to top" button to the screen
  if( window.scrollY > document.querySelector('main').offsetHeight - 500) {
    backToTop.style.display = 'block';
  }else {
    backToTop.style.display = 'none';
  }
}
