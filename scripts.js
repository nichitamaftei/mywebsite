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


