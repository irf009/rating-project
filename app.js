const numbers = document.querySelectorAll(`.number-btn`);
const submitBtn = document.querySelector(`.submit-btn`);
const givenNumber = document.querySelector(`.given-number`);
const ratingSection = document.querySelector(`.rating-section`);
const thankYouSection = document.querySelector(`.thank-you-section`);
let currentNumber = true;

numbers.forEach(function (number) {
  number.addEventListener(`click`, function (e) {
    if (currentNumber === true) {
      e.currentTarget.classList.add(`click`);
      e.currentTarget.classList.remove(`hover`);
      currentNumber = e.currentTarget;
    } else {
      currentNumber.classList.remove(`click`);
      currentNumber.classList.add(`hover`);
      e.currentTarget.classList.add(`click`);
      e.currentTarget.classList.remove(`hover`);
      currentNumber = e.currentTarget;
    }
  });
});

submitBtn.addEventListener(`click`, function (e) {
  ratingSection.classList.add(`none`);
  thankYouSection.classList.remove(`none`);
  givenNumber.innerHTML = currentNumber.innerHTML;
});
