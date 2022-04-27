const ratingCard = document.querySelector('.initial-card');
const thankYouCard = document.querySelector('.thank-you-container');
const submitBtn = document.querySelector('.submit-btn');
const ratingBtn = document.querySelectorAll('.rating-btn');
const result = document.querySelector('#selectedRating');

ratingBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        result.textContent = e.target.textContent;

        let selectedBtn = e.currentTarget;
        for (let i = 0; i < ratingBtn.length; i++){

            if (ratingBtn[i].getAttribute('aria-selected') == 'true') {
                ratingBtn[i].setAttribute('aria-selected', false);
                selectedBtn.setAttribute('aria-selected', true);   
            } else {
                selectedBtn.setAttribute('aria-selected', true);
            };
        };
        
    });
});

submitBtn.addEventListener('click', () => {
    ratingCard.classList.add('hide');
    thankYouCard.classList.remove('hide');
})