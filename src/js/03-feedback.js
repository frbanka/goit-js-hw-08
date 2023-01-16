import { throttle } from 'lodash';

const inputForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let newFeedback = {};
setLocalStorage();

inputForm.addEventListener('input', throttle(onFormInput, 500));
inputForm.addEventListener('submit', submitForm);

function onFormInput() {
  let email = inputForm.email.value;
  let message = inputForm.message.value;
  realtimeStorage = { email, message };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(realtimeStorage));
}

function submitForm(e) {
  e.preventDefault();
  if (!e.target.email.value || !e.target.message.value) {
    alert('No data');
    return;
  }
  e.target.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
function setLocalStorage() {
  try {
    let currentStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!currentStorage) {
      return;
    }
    newFeedback = currentStorage;
    inputForm.email.value = newFeedback.email;
    inputForm.message.value = newFeedback.message;
  } catch (error) {
    console.error('Error: ', error.message);
  }
}
