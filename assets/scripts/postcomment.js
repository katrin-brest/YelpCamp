const review = document.querySelector('.review');

document.addEventListener('DOMContentLoaded', addAllReviews )

// add review-items, if any
function addAllReviews () {
  if(localStorage.getItem('counter')) {
  for (let i = 0; i < localStorage.getItem('counter'); i++) {
    let newComment = JSON.parse(localStorage.getItem(`comment${i}`)) 
    console.log(typeof newComment)
    addReview('Katrin', newComment.date, newComment.text)
  }
}
}

// make and add a new review-item
function addReview (name, date, text) {

  let reviewItem = document.createElement ('div');
  reviewItem.className = 'review-item'

  let reviewItemInner = document.createElement ('div');
  reviewItemInner.className = 'review-item__inner'


  let revHeading = document.createElement('h4');
  revHeading.className = 'review-item__heading';
  revHeading.textContent = name;

  let revTime = document.createElement('span');
  revTime.className = 'review-item__time';
  revTime.textContent = date;

  let revText = document.createElement('p');
  revText.className = 'review-item__text';
  revText.textContent = text;

  review.prepend(reviewItem);

  reviewItem.append(reviewItemInner, revText);
  reviewItemInner.append (revHeading, revTime);
}

// localStorage.clear()
 