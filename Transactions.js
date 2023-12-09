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
});