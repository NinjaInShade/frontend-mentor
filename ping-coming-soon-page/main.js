function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById('subscribe-form').elements['email'];
  const email_error_text = document.getElementById('email-error');

  email.classList.remove('header-input-error');
  email_error_text.classList.remove('header-error-text-visible');

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value || !email_re.test(String(email.value).toLowerCase())) {
    email.classList.add('header-input-error');

    email_error_text.classList.add('header-error-text-visible');
    email_error_text.innerHTML = 'Please provide a valid email address';

    return;
  }
}
