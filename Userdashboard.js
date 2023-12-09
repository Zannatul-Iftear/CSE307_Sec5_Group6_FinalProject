const projectContainers = document.querySelectorAll('.project-container');

projectContainers.forEach(project => {
    // Check conditions and update banner content accordingly
    // Example: Be the first to bid
    const banner = project.querySelector('.banner');
    if (banner) {
        banner.textContent = 'Be the first to bid';
        // Add logic for other conditions (Hot now, Matches your profile)
    }
});

 
projectContainers.forEach(project => {
    // Check conditions and update banner content accordingly
    // Example: Be the first to bid
    const banner = project.querySelector('.banner2');
    if (banner) {
        banner.textContent = 'Hot Project in your area';
        // Add logic for other conditions (Hot now, Matches your profile)
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const bidBtns = document.querySelectorAll('.bid-btn');

    bidBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);

            if (popup) {
                popup.style.display = 'block';

                // Close button functionality for the specific pop-up
                const closeBtn = popup.querySelector('.close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', function() {
                        popup.style.display = 'none';
                    });
                }

                // Send bid button functionality for the specific pop-up
                const sendBidBtn = popup.querySelector('#sendBidBtn' + popupId.slice(-1));
                if (sendBidBtn) {
                    sendBidBtn.addEventListener('click', function() {
                        const bidText = popup.querySelector('#bidText' + popupId.slice(-1)).value;
                        console.log('Sending bid:', bidText);
                        popup.style.display = 'none';
                    });
                }
            }
        });
    });
});