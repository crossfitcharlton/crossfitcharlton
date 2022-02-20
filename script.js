document.querySelector('form').addEventListener('submit', validateSubscriberForm)

document.querySelector('#close-modal').addEventListener('click', (e) => {
  e.preventDefault()
  toggleModal();
});

function toggleModal() {
  document.querySelector('#confirmation-modal').classList.toggle('sent')
  window.setTimeout(()=>{document.querySelector('#confirmation-modal').classList.toggle('visible')}, 3)
}

function validateSubscriberForm(e) {
  e.preventDefault();

  let subscriberForm = e.target;
  
  const data = new URLSearchParams();
  for (const pair of new FormData( subscriberForm )) {
      data.append(pair[0], pair[1]);
  }

  fetch(
    e.target.action, {
      method: 'POST',
      mode: 'no-cors',
      body: data
    })
    .then(result => {
      subscriberForm.reset();
      toggleModal();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}