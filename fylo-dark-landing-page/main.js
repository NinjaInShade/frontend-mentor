const formContainer = document.getElementById('sub-form');
const input = formContainer.querySelector('input');
const error = formContainer.querySelector('#error');

function validateForm(e) {
  e.preventDefault();
  error.style.visibility = 'hidden';
  error.innerText = 'Form is currently valid';

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!input.value || !email_re.test(String(input.value).toLowerCase())) {
    error.style.visibility = 'visible';
    error.innerText = 'Error, please check your email';

    return;
  }
}
