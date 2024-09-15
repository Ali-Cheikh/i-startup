
const scriptURL = 'https://script.google.com/macros/s/AKfycbxN5W75kNRF1Nsl-9-Cko0gAV9uU22-T62U0k6MKDAkWk235gsyigqs5QFS1Mdskp5Fxw/exec';

$(document).ready(function () {
    $('.app-form').on('submit', function (e) {
        e.preventDefault();

        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Sending your message',
            willOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false,
            allowOutsideClick: false,
            background: "#ddbf51d0",
            color:"#000"
        });

        const formData = new FormData(this);

        $.ajax({
            url: scriptURL,
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log("Response from Google Sheets:", data);

                if (data.result === 'success') {
                    Swal.fire({
                        imageUrl: "Assets/logocon-full-B.png",
                        imageAlt: "Custom Success Icon",
                        title: 'Success!',
                        text: 'Your message is sent. Thank you for reaching out.',
                        width: 600,
                        padding: "3em",
                        timer: 5000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        color: "#fff",
                        background: "#6366f1",
                        backdrop: "rgba(0,0,0,0.4)",
                    }).then(() => {
                        window.location.reload();
                    });
                } else {
                    console.error('Error:', data.error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again later.',
                    });
                }
            },
            error: function (error) {
                console.error('Error!', error);
                Swal.fire({
                    imageUrl: "Assets/logocon-full-B.png",
                    imageAlt: "Custom Success Icon",
                    title: 'Success!',
                    text: 'Your message is sent. Thank you for reaching out.',
                    width: 600,
                    padding: "3em",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    color: "#fff",
                    background: "#6366f1",
                    backdrop: "rgba(0,0,0,0.4)",
                    }).then(() => {
                        window.location.reload();
                    });
            }
        });
    });
});



/*============================================================================================================================================================= */

