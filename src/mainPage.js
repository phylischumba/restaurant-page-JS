const homeMainPage = () => {

  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');
  const mainPage = document.createElement('div');
  mainPage.setAttribute('class', 'main-page');
  const overlay = document.createElement('div');
  overlay.setAttribute('class', 'overlay')

  mainContent.appendChild(mainPage);
  mainPage.appendChild(overlay);

  const mainBody = document.createElement('div');
  mainBody.setAttribute('class', 'main-body');
  mainPage.appendChild(mainBody);

  const span = document.createElement('span');
  const welcome = document.createElement('h3');
  const link = document.createElement('a');
  link.setAttribute('class', 'menu-link');
  link.setAttribute('href', '#');
  span.setAttribute('class', 'top-services');
  welcome.setAttribute('class', 'welcome');
  span.innerHTML = 'Top Services and Premium Cuisine';
  welcome.innerHTML = 'Welcome to Favorite Restaurant';
  link.innerHTML = 'Checkout the menu';


  mainBody.append(span, welcome, link);

  const ourStory = document.createElement('div');
  ourStory.setAttribute('class', 'our-story');

  mainContent.appendChild(ourStory);
  const leftDiv = document.createElement('div');
  ourStory.appendChild(leftDiv);
  leftDiv.setAttribute('class', 'left-div');
  const spanOne = document.createElement('span');
  spanOne.innerHTML = 'Our story';
  const header4 = document.createElement('h4');
  header4.innerHTML = 'Few words about us...';
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.Explore Our Menu'
  leftDiv.appendChild(spanOne)
  leftDiv.appendChild(header4)
  leftDiv.appendChild(paragraph);

  const rightDiv = document.createElement('div');
  rightDiv.setAttribute('class', 'right-div');
  ourStory.appendChild(rightDiv);
  const image = document.createElement('img');
  image.setAttribute('src', 'http://restabook.kwst.net/dark/images/all/3.jpg');
  image.setAttribute('class', 'img-fluid');
  rightDiv.appendChild(image);


  return mainContent;
}

export default homeMainPage 