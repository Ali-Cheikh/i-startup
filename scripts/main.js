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

    // Mapping paths to new paths (instead of domains)
    const pathMap = {
        '/contact.html': '/contact-page',    // Change to /contact-page
        '/services.html': '/services-page',  // Change to /services-page
        '/incubationapp.html': '/incubation',// Change to /incubation
        '/accelerationapp.html': '/acceleration'// Change to /acceleration
    };

    // Get the new path based on the current URL path
    const newPath = pathMap[currentPath];

    // If a new path exists, update the URL without reloading the page
    if (newPath) {
        const newUrl = window.location.protocol + "//" + window.location.host + newPath;
        window.history.pushState({}, "", newUrl);
    }
};
