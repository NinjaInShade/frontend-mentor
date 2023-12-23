function submitHeaderForm(e) {
  e.preventDefault();

  const headerForm = document.getElementById('header-form');
  const headerInput = headerForm.querySelector('input');
  const headerError = headerForm.querySelector('p');

  headerInput.classList.remove('header-form-input-error');
  headerError.classList.add('hidden');
  headerError.innerText = 'Form is valid';

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Form is invalid
  if (!headerInput.value || !email_re.test(String(headerInput.value).toLowerCase())) {
    headerInput.classList.add('header-form-input-error');
    headerError.classList.remove('hidden');
    headerError.innerText = 'Please check your email';
  }
}

function submitSubscribeForm(e) {
  e.preventDefault();

  const subscribeForm = document.getElementById('subscribe-form');
  const subscribeInput = subscribeForm.querySelector('input');
  const subscribeError = subscribeForm.querySelector('p');

  subscribeInput.classList.remove('subscribe-form-input-error');
  subscribeError.classList.add('hidden');
  subscribeError.innerText = 'Form is valid';

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Form is invalid
  if (!subscribeInput.value || !email_re.test(String(subscribeInput.value).toLowerCase())) {
    subscribeInput.classList.add('subscribe-form-input-error');
    subscribeError.classList.remove('hidden');
    subscribeError.innerText = 'Please check your email';
  }
}
