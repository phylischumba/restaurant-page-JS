import navBar from './navbar';
import homeMainPage from './mainPage';
import menu from './menu';

// navBar();
// homeMainPage();
// // menu();


const displayNav = navBar();
const displayHome = homeMainPage();
// const displayContact = contactPage();
const displayMenu = menu();

const content = document.querySelector('#content');


const displaySection = (section) => {
  content.innerHTML = '';
  content.appendChild(displayNav);
  content.appendChild(section);
};

displaySection(displayHome);

const home = document.getElementById('home');

const menuPage = document.getElementById('menu');
// const contact = document.getElementById('contact');

const showMethod = (x) => {
  if (x.target === home) {
    displaySection(displayHome);
  } else if (x.target === menuPage) {
    displaySection(displayMenu);
  } else {
    // show(displayContact);
  }
};


home.addEventListener('click', showMethod );
menuPage.addEventListener('click', showMethod );
// contact.addEventListener('click', showMethod );