new ClipboardJS('#contact');

const contact = document.getElementById('contact');
contact.addEventListener('click', function () {
    Toastify({
        text: "Email address copied!",
        duration: 5000,
        close: true,
        gravity: "top",
        position: "left",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true
    }).showToast();
    return false;
}, false);