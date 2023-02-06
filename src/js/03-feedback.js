import _, { get, update } from 'lodash';

formElement = document.querySelector('.feedback-form');
inputEl = document.querySelector('input');
textEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';



formElement.addEventListener('input',_.throttle((saveMail),500));

function saveMail(e) {
  e.preventDefault();
  formInput = {
    Email: inputEl.value,
    Message: textEl.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

const getSavedInput = localStorage.getItem(STORAGE_KEY);
const parseInputs = JSON.parse(getSavedInput);

function updateOutput() {
  inputEl.value = parseInputs.Email;
  textEl.value = parseInputs.Message;
}
updateOutput();

formElement.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(parseInputs);
  localStorage.clear();
  formElement.reset()
}