import _ from 'lodash';

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea[name=message]');
const btnEl = document.querySelector('button[type=submit');
const formEl = document.querySelector('.feedback-form');
const STORAGEKEY = 'feedback-form-state';
updateOutput();

const addData = {
  email: '',
  message: '',
};

saveData = _.throttle(() => {
  addData.email = emailEl.value;
  addData.message = messageEl.value;
  localStorage.setItem(STORAGEKEY, JSON.stringify(addData));
}, 500);

submitForm = e => {
  e.preventDefault();
  localStorage.clear();
  formEl.reset();
  messageEl.innerHTML = '';
};

formEl.addEventListener('input', saveData);
btnEl.addEventListener('click', submitForm);

function updateOutput() {
  const data = JSON.parse(localStorage.getItem(STORAGEKEY)) || '';
  emailEl.value = data.email || '';
  messageEl.textContent = data.message;
  console.log(data);
}
