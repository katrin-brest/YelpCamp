let camps = Array.from(document.querySelectorAll('.card__heading')).map(el => el.textContent)
let cards = Array.from(document.querySelectorAll('.card'))
console.log(cards)

console.log(camps)

const searchForm = document.forms.search;
const searchField = document.querySelector('.search-form__input');
const searchBtn = document.querySelector('.search-form__btn'); 
const gallery = document.querySelector('.gallery')


searchField.addEventListener('input', searchCamp)
searchBtn.addEventListener('click', searchCamp)

let notice = document.createElement('div');
notice.classList.add('notice');
notice.textContent = 'No campgrounds found';

function searchCamp () {
  cards.forEach(card => card.classList.remove('hidden'));
  notice.remove()
  gallery.classList.remove('hidden')

  let searchText = searchForm.elements['search-text'].value.toLowerCase();
  
  console.log(searchText)
  let count = 0;
   
  for(i = 0; i < camps.length; i++) {
      if(!camps[i].toLocaleLowerCase().includes(searchText)) {
      cards[i].classList.add('hidden');
      count++
    } 
  }

  if(count === camps.length) {
    gallery.before(notice)
    gallery.classList.add('hidden')
  }
}
