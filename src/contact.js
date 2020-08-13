const contactPage = () => {
  const contactSection = document.createElement('div');
  contactSection.setAttribute('class', 'row contact');

  const contactMain = document.createElement('div');
  contactMain.setAttribute('class', 'contact-main col-lg-6 col-md-12 col-sm-12');

  const touch = document.createElement('h4');
  touch.innerHTML = 'GET IN TOUCH';

  const describe = document.createElement('p');
  describe.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
  const describe2 = document.createElement('p');
  describe2.innerHTML = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt';

  const contactDetails = document.createElement('div');
  contactDetails.setAttribute('class', 'contact-details  col-lg-6 col-md-12 col-sm-12');

  const header = document.createElement('h3');
  header.innerHTML = 'Contact Details';

  const formDiv = document.createElement('div');
  formDiv.setAttribute('class', 'form');

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'submit');

  const formRow = document.createElement('div');
  formRow.setAttribute('class', 'row');

  const column1 = document.createElement('div');
  column1.setAttribute('class', 'col-sm-6');

  const label1 = document.createElement('label');
  label1.setAttribute('for', 'name');
  label1.setAttribute('class', 'd-block');
  label1.innerHTML = 'Name:';

  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('name', 'fullName');
  input1.setAttribute('id', 'fullName');

  const column2 = document.createElement('div');
  column2.setAttribute('class', 'col-sm-6');

  const label2 = document.createElement('label');
  label2.setAttribute('for', 'email');
  label2.setAttribute('class', 'd-block');
  label2.innerHTML = 'Email:';

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'email');
  input2.setAttribute('name', 'email');
  input2.setAttribute('id', 'email');

  const column3 = document.createElement('div');
  column3.setAttribute('class', 'col-sm-6');

  const label3 = document.createElement('label');
  label3.setAttribute('for', 'phone');
  label3.setAttribute('class', 'd-block');
  label3.innerHTML = 'Phone:';

  const input3 = document.createElement('input');
  input3.setAttribute('type', 'number');
  input3.setAttribute('name', 'phone');
  input3.setAttribute('id', 'phone');

  const column4 = document.createElement('div');
  column4.setAttribute('class', 'col-sm-6');

  const label4 = document.createElement('label');
  label4.setAttribute('for', 'message');
  label4.setAttribute('class', 'd-block');
  label4.innerHTML = 'Message:';

  const input4 = document.createElement('textarea');
  input4.setAttribute('type', 'text');
  input4.setAttribute('name', 'message');
  input4.setAttribute('id', 'message');

  const btn = document.createElement('div');
  btn.setAttribute('class', 'text-center');

  const button = document.createElement('button');
  button.setAttribute('class', 'btn btn-primary');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'Send Message';


  contactSection.appendChild(contactMain);
  contactMain.appendChild(touch);
  contactMain.appendChild(describe);
  contactMain.appendChild(describe2);

  contactSection.appendChild(contactDetails);
  contactDetails.appendChild(header);
  contactDetails.appendChild(formDiv);
  formDiv.appendChild(form);
  form.appendChild(formRow);
  formRow.appendChild(column1);
  column1.appendChild(label1);
  column1.appendChild(input1);
  formRow.appendChild(column2);
  column2.appendChild(label2);
  column2.appendChild(input2);
  formRow.appendChild(column3);
  column3.appendChild(label3);
  column3.appendChild(input3);
  formRow.appendChild(column4);
  column4.appendChild(label4);
  column4.appendChild(input4);
  formRow.appendChild(btn);
  btn.appendChild(button);

  return contactSection;
};

export default contactPage;