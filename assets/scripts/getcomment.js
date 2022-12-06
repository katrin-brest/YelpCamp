const commentForm = document.querySelector('.comment__form');
const button = document.querySelector('.form__btn');
const form = document.forms.commentForm;

let commentText = form.elements.comment

button.addEventListener('click', getComment);

// add text and date of comment to localstorage
function getComment () {
  
   if(commentText.value !== '') {
   let i
// проверяем счетчик в локалсторедж
   if(localStorage.getItem('counter')) {
      i = +localStorage.getItem('counter');
      
   } else {
      localStorage.setItem('counter', '0');
      i = 0;
   }
   let curDate = new Date()
   let obj = {
      text: commentText.value,
      date: `${curDate.getHours()}:${curDate.getMinutes()} ${curDate.getDate()}-${curDate.getMonth() + 1}-${curDate.getFullYear()}`
   }
   localStorage.setItem(`comment${i}`, JSON.stringify(obj));
   localStorage.setItem('counter', ++i)
}
}

import {textarea, autoHeight } from "./textarea.js";
textarea.addEventListener('input', autoHeight)


