const textarea = document.querySelector('textarea');

function autoHeight() {
  textarea.style.height = textarea.scrollHeight + "px";
}
autoHeight()
console.log(textarea.style.height)
textarea.addEventListener('input', autoHeight)

export {textarea, autoHeight};