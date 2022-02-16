document
  .querySelector("#subscribe-link")
  .addEventListener("click", changeFocus);

function changeFocus(e) {
  document.querySelector('[name="fields[email]"]').focus();
  e.preventDefault();
}
