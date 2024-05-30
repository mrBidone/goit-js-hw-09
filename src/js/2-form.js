const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: ""
};

form.addEventListener('input', () => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  formData.email = email.trim();
  formData.message = message.trim();

  saveToLS('feedback-form-state', formData);
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
};

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const formData = loadFromLS('feedback-form-state');
  
  form.elements.email.value = formData?.email || "";
  form.elements.message.value = formData?.message || "";
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  formData.email = email.trim();
  formData.message = message.trim();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  
  console.log(formData);
  
  localStorage.removeItem('feedback-form-state');

  form.reset();
  
});