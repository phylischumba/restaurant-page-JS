const navBar = () => {
 
  const mainNav = document.createElement('div');
  mainNav.setAttribute('class', 'main-nav');
  const nav = document.createElement('nav')
  mainNav.appendChild(nav)
  const homeLink = document.createElement('a');
  homeLink.setAttribute('id', 'home');
  homeLink.innerHTML = 'Home'
  const menuLink = document.createElement('a');
  menuLink.setAttribute('id', 'menu');
  menuLink.innerHTML = 'Menu'
  const contactLink = document.createElement('a');
  contactLink.setAttribute('id', 'contact');
  contactLink.innerHTML = 'Contact'
  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  
  return mainNav;

}

export default navBar;