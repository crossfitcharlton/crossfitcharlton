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
  
  if (subscriberForm['subject'].value!='') { // caught a bot
    toggleModal();

  } else {
    // store honeypot
    const honeypot = subscriberForm['subject']
    // remove honeypot
    subscriberForm['subject'].remove()
    // convert formdata for fetch
    const data = new URLSearchParams();
    for (const pair of new FormData( e.target )) {
        data.append(pair[0], pair[1]);
    }

    fetch(
      e.target.action, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      })
      .then(result => {
        // set up honeypot again
        subscriberForm.append(honeypot);
        subscriberForm.reset();
        toggleModal();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}