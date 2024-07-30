const scriptURL = 'https://script.google.com/macros/s/AKfycbzV7YacHV8Ts470IJOW8Vmcz6LO0iNsPuv5w8kw7C7nanpe-V9YPFBicOdv_q548EOu/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})