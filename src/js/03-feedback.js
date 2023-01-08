import throttle from 'lodash';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const inputForm = document.querySelector('.feedback-form');

inputForm.addEventListener('submit', submitForm);
inputForm.addEventListener('input', throttle(onFormInput, 250));

function onFormInput(e) {
  let newFeedback = localStorage.getItem(LOCAL_STORAGE_KEY);
  newFeedback = newFeedback ? JSON.parse(newFeedback) : {};
  newFeedback[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newFeedback));
}
