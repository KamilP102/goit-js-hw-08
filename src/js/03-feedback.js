import _ from 'lodash';

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea[name=message]');
const btnEl = document.querySelector('button[type=submit');
const formEl = document.querySelector('.feedback-form');
const STORAGEKEY = 'feedback-form-state';

const updateOutput = () => {
  const data = JSON.parse(localStorage.getItem(STORAGEKEY)) || '';
  emailEl.value = data.email || '';
  messageEl.textContent = data.message;
};
updateOutput();


const addData = {
  email: '',
  message: '',
};
const saveData = () => {
  addData.email = emailEl.value;
  addData.message = messageEl.value;
  localStorage.setItem(STORAGEKEY, JSON.stringify(addData));
  return;
};

const submitForm = e => {
  e.preventDefault();
  console.log(addData);
  localStorage.clear();
  formEl.reset();
  messageEl.innerHTML = '';
};


formEl.addEventListener('input', _.throttle(saveData, 500));
btnEl.addEventListener('click', submitForm);
