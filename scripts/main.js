document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animate-in-view');
        }
    });
});

window.onload = function() {
    const currentPath = window.location.pathname;

    // Mapping paths to new URLs
    const pathMap = {
        '/contact.html': 'Contact.i-startup.tn',
        '/services.html': 'Service.i-startup.tn',
        '/incubationapp.html': 'Incubation.i-startup.tn',
        '/accelerationapp.html': 'Acceleration.i-startup.tn'
    };

    // Get the new URL based on the current path
    const newDomain = pathMap[currentPath];

    // If a new URL exists, update the URL
    if (newDomain) {
        const newUrl = window.location.protocol + "//" + newDomain;
        window.history.pushState({}, "", newUrl);
    }
};
