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
    // Check if the script is running
    console.log("Script is running");

    // Get the current URL path
    const currentPath = window.location.pathname;
    console.log("Current Path:", currentPath);

    // Mapping paths to new paths
    const pathMap = {
        '/index.html': '/Home',
        '/contact.html': '/Contact-Page',
        '/services.html': '/Services-Page',
        '/application.html': '/Application-Process',
        '/programs.html': '/Programs-Page',
        '/success-stories.html': '/Success-stories✨',
        '/incubationapp.html': '/Incubation',
        '/accelerationapp.html': '/Acceleration'
    };

    // Get the new path based on the current path
    const newPath = pathMap[currentPath];
    console.log("New Path:", newPath);

    // If a new path exists, update the URL
    if (newPath) {
        const newUrl = window.location.protocol + "//" + window.location.host + newPath;
        console.log("New URL:", newUrl);
        window.history.pushState({}, "", newUrl);  // Change the URL without reloading the page
    }
};
