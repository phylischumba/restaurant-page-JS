const navBar = () => {
  const mainPage = document.querySelector('#content');
 
  const mainNav = document.createElement('div');
  mainNav.setAttribute('class', 'main-nav');
  mainPage.appendChild(mainNav);
  const nav = document.createElement('nav')
  mainNav.appendChild(nav)
  const homeLink = document.createElement('a');
  homeLink.setAttribute('href', 'home.html');
  homeLink.innerHTML = 'Home'
  const menuLink = document.createElement('a');
  menuLink.setAttribute('href', 'menu.html');
  menuLink.innerHTML = 'Menu'
  const contactLink = document.createElement('a');
  contactLink.setAttribute('href', 'home.html');
  contactLink.innerHTML = 'Contact'
  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  
  return mainPage;

}

export default navBar;