// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('show');
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('show');
}

// Close modal if clicked outside content
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].classList.remove('show');
        }
    }
}

// Function to change state of classes
function toggleContactForm() {
    var contactForm = document.getElementById('contact-form-container');
    var overlay = document.getElementById('overlay');
    
    contactForm.classList.toggle('active');
    overlay.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    burgerMenu.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
        burgerMenu.classList.toggle('hidden'); // Hide the burger icon when side menu is active
    });

    closeBtn.addEventListener('click', function () {
        sideMenu.classList.remove('active');
        burgerMenu.classList.remove('hidden'); // Show the burger icon when side menu is closed
    });
});



