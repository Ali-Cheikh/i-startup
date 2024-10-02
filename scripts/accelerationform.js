
const scriptURL = "https://script.google.com/macros/s/AKfycbyMDIvxKW3On4D7wzzcIxlXr4a-MWz0AUn-Qag_JabIAXSK2y6Rq3yQA06VeHTksQja/exec";
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('acceleration-app');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', function (e) {
        e.preventDefault();

        // Validate form inputs
        if (!form.checkValidity()) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid input',
                text: 'Please fill in all required fields correctly.'
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
                if (response.ok) {
                    Swal.fire({
                        imageUrl: "Assets/logocon-full.png",
                        imageAlt: "Custom Success Icon",
                        title: 'Success!',
                        text: 'Application submitted successfully. We will get in touch with you very soon.',
                        width: 600,
                        padding: "3em",
                        timer: 5000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                    }).then(() => {
                        form.reset(); // Reset the form after successful submission
                    });
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                Swal.fire({
                    imageUrl: "Assets/logocon-full.png",
                    imageAlt: "Custom Success Icon",
                    title: 'Success!',
                    text: 'Application submitted successfully. We will get in touch with you very soon.',
                    width: 600,
                    padding: "3em",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                }).then(() => {
                    form.reset(); // Reset the form after successful submission
                });
            });
    });
});
