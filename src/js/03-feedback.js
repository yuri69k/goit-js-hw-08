import throttle from 'lodash.throttle';

let formData = {};
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onSetForm, 500));
populateForm();

function onSetForm(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function populateForm() {
  const localeStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (localeStorageData) {
    const { email, message } = localeStorageData;
    refs.input.value = email;
    refs.textarea.value = message;

    formData.email = email;
    formData.message = message;
  }
}
