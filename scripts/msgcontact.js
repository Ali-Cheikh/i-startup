
const scriptURL = 'https://script.google.com/macros/s/AKfycbxN5W75kNRF1Nsl-9-Cko0gAV9uU22-T62U0k6MKDAkWk235gsyigqs5QFS1Mdskp5Fxw/exec';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', function (e) {
        e.preventDefault();

                // Validate form inputs
                if (!form.checkValidity()) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid input',
                        text: 'Please fill in all required fields. Correctly'
                    });
                    return;
                }

        // Show SweetAlert immediately when the submit button is clicked
        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Sending your message',
            showConfirmButton: false,
            allowOutsideClick: false
        });

        // Make the fetch request to the server
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                // Handle response here
                Swal.fire({
                    imageUrl: "Assets/logocon-full.png",
                    imageAlt: "Custom Success Icon",
                    title: 'Success!',
                    text: 'Your message is sent. Thank you for reaching out.',
                    width: 600,
                    padding: "3em",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    color: "#000",
                    background: "#63ddff",
                    backdrop: "rgba(0,0,0,0.4)",
                }).then(() => {
                    form.submit();
                    window.location.reload(); // Reload the page after successful submission
                });
            })
            .catch(error => {
                console.error('Error!', error.message);
                Swal.fire({
                    imageUrl: "Assets/logocon-full.png",
                    imageAlt: "Custom Success Icon",
                    title: 'Success!',
                    text: 'Your message is sent. Thank you for reaching out.',
                    width: 600,
                    padding: "3em",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    color: "#000",
                    background: "#63ddff",
                    backdrop: "rgba(0,0,0,0.4)",
                }).then(() => {
                    form.submit();
                    window.location.reload();
                });
            });
    });
});
/*============================================================================================================================================================= */

