const mainMenu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu-page');

  const contentPage = document.createElement('div');
  contentPage.setAttribute('class', 'content-page');

  const overlay = document.createElement('div');
  overlay.setAttribute('class', 'overlay');

  const sectionTitle = document.createElement('div');
  sectionTitle.setAttribute('class', 'section-title');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Enjoy your time in our Restaurant with Pleasure';

  const header4 = document.createElement('h4');
  header4.innerHTML = 'Discover Our Menu';

  menu.appendChild(contentPage);
  contentPage.appendChild(overlay);
  contentPage.appendChild(sectionTitle);
  sectionTitle.appendChild(paragraph);
  sectionTitle.appendChild(header4);


  const menuItems = document.createElement('div');
  menuItems.setAttribute('class', 'menu-items');

  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'menu-list-item col-lg-4 col-md-6 mb-3');

  const imgDiv1 = document.createElement('div');
  imgDiv1.setAttribute('class', 'menu-img');

  const imageLink1 = document.createElement('a');

  const img1 = document.createElement('img');
  img1.src = 'https://usercontent2.hubstatic.com/13702095_f520.jpg';
  img1.setAttribute('class', 'img-fluid');

  const menuInfo1 = document.createElement('div');
  menuInfo1.setAttribute('class', 'menu-info');

  const item1 = document.createElement('h4');
  item1.innerHTML = 'Maharagwe';

  const para1 = document.createElement('p');
  para1.innerHTML = 'Maharagwe, red kidney beans cooked in coconut milk. Served hot with ugali, rice, chapati, or mandazi. Can be sweet or savory.';

  const span1 = document.createElement('span');
  span1.innerHTML = '$17';

  const button1 = document.createElement('button');
  button1.innerHTML = 'Add to Cart';
  button1.setAttribute('type', 'submit');

  //  div2
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'menu-list-item col-lg-4 col-md-6 mb-3');

  const imgDiv2 = document.createElement('div');
  imgDiv2.setAttribute('class', 'menu-img');

  const imageLink2 = document.createElement('a');

  const img2 = document.createElement('img');
  img2.src = 'https://i.pinimg.com/originals/22/31/f4/2231f4087f369157e3d2651f6fa434f7.jpg';
  img2.setAttribute('class', 'img-fluid');

  const menuInfo2 = document.createElement('div');
  menuInfo2.setAttribute('class', 'menu-info');

  const item2 = document.createElement('h4');
  item2.innerHTML = 'Beef Stew & Ugali';

  const para2 = document.createElement('p');
  para2.innerHTML = "A classic Kenyan beef stew accompanied with properly cooked Ugali is everyone's favorite";

  const span2 = document.createElement('span');
  span2.innerHTML = '$17';

  const button2 = document.createElement('button');
  button2.innerHTML = 'Add to Cart';
  button2.setAttribute('type', 'submit');

  // div3

  const div3 = document.createElement('div');
  div3.setAttribute('class', 'menu-list-item col-lg-4 col-md-6 mb-3');

  const imgDiv3 = document.createElement('div');
  imgDiv3.setAttribute('class', 'menu-img');

  const imageLink3 = document.createElement('a');

  const img3 = document.createElement('img');
  img3.src = 'https://cdn-cf.tucantravel.com/images/Country-guide-Tucan-Travel/Kenya-tours-trips-holidays/food-and-drink-in-kenya/Mandazi-popular-food-in-Kenya.jpg';
  img3.setAttribute('class', 'img-fluid');

  const menuInfo3 = document.createElement('div');
  menuInfo3.setAttribute('class', 'menu-info');

  const item3 = document.createElement('h4');
  item3.innerHTML = 'Mahamri/Mandazi';

  const para3 = document.createElement('p');
  para3.innerHTML = 'A semisweet pastry usually served for breakfast alongside a cup of warming chai.';

  const span3 = document.createElement('span');
  span3.innerHTML = '$17';

  const button3 = document.createElement('button');
  button3.innerHTML = 'Add to Cart';
  button3.setAttribute('type', 'submit');

  // div 4

  const div4 = document.createElement('div');
  div4.setAttribute('class', 'menu-list-item col-lg-4 col-md-6 mb-3');

  const imgDiv4 = document.createElement('div');
  imgDiv4.setAttribute('class', 'menu-img');

  const imageLink4 = document.createElement('a');

  const img4 = document.createElement('img');
  img4.src = 'https://cdn-cf.tucantravel.com/images/Country-guide-Tucan-Travel/Kenya-tours-trips-holidays/food-and-drink-in-kenya/Vegetarian-food-in-Kenya.jpg';
  img4.setAttribute('class', 'img-fluid');

  const menuInfo4 = document.createElement('div');
  menuInfo4.setAttribute('class', 'menu-info');

  const item4 = document.createElement('h4');
  item4.innerHTML = 'Githeri';

  const para4 = document.createElement('p');
  para4.innerHTML = 'A vegetarian meal served with vegetables.';

  const span4 = document.createElement('span');
  span4.innerHTML = '$17';

  const button4 = document.createElement('button');
  button4.innerHTML = 'Add to Cart';
  button4.setAttribute('type', 'submit');

  // div 5

  const div5 = document.createElement('div');
  div5.setAttribute('class', 'menu-list-item col-lg-4 col-md-6 mb-3');

  const imgDiv5 = document.createElement('div');
  imgDiv5.setAttribute('class', 'menu-img');

  const imageLink5 = document.createElement('a');

  const img5 = document.createElement('img');
  img5.src = 'https://usercontent2.hubstatic.com/13702037_f520.jpg';
  img5.setAttribute('class', 'img-fluid');

  const menuInfo5 = document.createElement('div');
  menuInfo5.setAttribute('class', 'menu-info');

  const item5 = document.createElement('h4');
  item5.innerHTML = 'Mutura';

  const para5 = document.createElement('p');
  para5.innerHTML = 'Mutura, sausage that is made up of fresh blood and meat.Spices and ingredients, like ginger, scallions, garlic, and red/green chillies, are added to it.';

  const span5 = document.createElement('span');
  span5.innerHTML = '$17';

  const button5 = document.createElement('button');
  button5.innerHTML = 'Add to Cart';
  button5.setAttribute('type', 'submit');


  // div6

  const div6 = document.createElement('div');
  div6.setAttribute('class', 'menu-list-item col-lg-4 col-md-6 mb-3');

  const imgDiv6 = document.createElement('div');
  imgDiv6.setAttribute('class', 'menu-img');

  const imageLink6 = document.createElement('a');

  const img6 = document.createElement('img');
  img6.src = 'https://usercontent1.hubstatic.com/13702032_f520.jpg';
  img6.setAttribute('class', 'img-fluid');

  const menuInfo6 = document.createElement('div');
  menuInfo6.setAttribute('class', 'menu-info');

  const item6 = document.createElement('h4');
  item6.innerHTML = 'Chips Mayai';

  const para6 = document.createElement('p');
  para6.innerHTML = "It is basically a combination of French fries and an egg omelet. It's considered junk food, but I guess it is fine to indulge in such foods once in a while";

  const span6 = document.createElement('span');
  span6.innerHTML = '$17';

  const button6 = document.createElement('button');
  button6.innerHTML = 'Add to Cart';
  button6.setAttribute('type', 'submit');


  menu.appendChild(menuItems);
  menuItems.appendChild(row);
  row.appendChild(div1);
  div1.appendChild(imgDiv1);
  imgDiv1.appendChild(imageLink1);
  imageLink1.appendChild(img1);
  div1.appendChild(menuInfo1);
  menuInfo1.appendChild(item1);
  menuInfo1.appendChild(para1);
  menuInfo1.appendChild(span1);
  menuInfo1.appendChild(button1);

  row.appendChild(div2);
  div2.appendChild(imgDiv2);
  imgDiv2.appendChild(imageLink2);
  imageLink2.appendChild(img2);
  div2.appendChild(menuInfo2);
  menuInfo2.appendChild(item2);
  menuInfo2.appendChild(para2);
  menuInfo2.appendChild(span2);
  menuInfo2.appendChild(button2);

  row.appendChild(div3);
  div3.appendChild(imgDiv3);
  imgDiv3.appendChild(imageLink3);
  imageLink3.appendChild(img3);
  div3.appendChild(menuInfo3);
  menuInfo3.appendChild(item3);
  menuInfo3.appendChild(para3);
  menuInfo3.appendChild(span3);
  menuInfo3.appendChild(button3);

  row.appendChild(div4);
  div4.appendChild(imgDiv4);
  imgDiv4.appendChild(imageLink4);
  imageLink4.appendChild(img4);
  div4.appendChild(menuInfo4);
  menuInfo4.appendChild(item4);
  menuInfo4.appendChild(para4);
  menuInfo4.appendChild(span4);
  menuInfo4.appendChild(button4);

  row.appendChild(div5);
  div5.appendChild(imgDiv5);
  imgDiv5.appendChild(imageLink5);
  imageLink5.appendChild(img5);
  div5.appendChild(menuInfo5);
  menuInfo5.appendChild(item5);
  menuInfo5.appendChild(para5);
  menuInfo5.appendChild(span5);
  menuInfo5.appendChild(button5);

  row.appendChild(div6);
  div6.appendChild(imgDiv6);
  imgDiv6.appendChild(imageLink6);
  imageLink6.appendChild(img6);
  div6.appendChild(menuInfo6);
  menuInfo6.appendChild(item6);
  menuInfo6.appendChild(para6);
  menuInfo6.appendChild(span6);
  menuInfo6.appendChild(button6);


  return menu;
};

export default mainMenu;