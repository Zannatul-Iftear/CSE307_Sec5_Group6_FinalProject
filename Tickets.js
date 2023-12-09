document.addEventListener("DOMContentLoaded", function() {
    const moreDetailsButtons = document.querySelectorAll('.more-details-btn');

    moreDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.previousElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Less Details';
            } else {
                details.style.display = 'none';
                this.textContent = 'More Details';
            }
        });
    });

    const replyButtons = document.querySelectorAll('.reply-btn');

    replyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const userReview = button.parentElement;
            const replyText = userReview.querySelector('.review-reply').value;
            const repliesContainer = userReview.querySelector('.replies-container');

            if (replyText.trim() !== '' && !button.disabled) {
                const replyElement = document.createElement('div');
                replyElement.classList.add('reply-text');
                replyElement.textContent = replyText;

                // Insert the reply into the replies container
                repliesContainer.appendChild(replyElement);

                // Clear reply textarea
                userReview.querySelector('.review-reply').value = '';

                // Disable the button after the reply is submitted
                button.disabled = true;
                button.textContent = 'Answered';
            }
        });
    });
});