import _ from 'lodash';

const emailEl = document.querySelector('input[type=email');
const messageEl = document.querySelector('textarea[name=message]');
const btnEl = document.querySelector('button[type=submit');
const formEl = document.querySelector('.feedback-form');

const data = {
  email: '',
  message: '',
};
getData = () => {
  data.email = emailEl.value;
  data.message = messageEl.value;
  localStorage.setItem(STORAGEKEY, JSON.stringify(data));
};
submitForm = () => {
  localStorage.clear();
  formEl.reset();
  console.log(STORAGEKEY);
};


const STORAGEKEY = 'feedback-form-state';
addEventListener.formEl('input', _.throttle(getData), 500);
addEventListener.btnEl('click', submitForm);
