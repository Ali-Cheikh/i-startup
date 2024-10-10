async function getUserDetails() {
    try {
        const apiKey = 'd8d24867a2d34a28a7e2b1ac98be45b3';
        let response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
        let data = await response.json();

        let ip = data.ip;
        let time = data.time_zone.current_time.split(" ")[1].substring(0, 5);
        document.getElementById('user-details').innerHTML = `If you are interested in Joining Our Team<br> Time now : ${time} <button id="join-waitlist" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-manrope font-bold"><a href="application/jobform.html">Join the<br>Wait-list</a></button><br>`;

        setInterval(() => {
            let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('user-details').innerHTML = `Join Our Team<br>Your IP: ${ip}<br> Time: ${currentTime} <button id="join-waitlist" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-manrope font-bold"><a href="404.html">Join the<br>Wait-list</a></button><br>`;
        }, 30000); // Refresh time every 30 seconds
        initMap(34.7686605, 10.7492971);

    } catch (error) {
        console.error("Error fetching user details:", error);
    }
}

    // Don't worry no-one is trying to hack you :P

function initMap(lat, lng) {
    var map = L.map('map').setView([lat, lng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="#idiot" target="services.html">2024 i-startup dev</a>'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup("We will meet you here")
        .openPopup();
}

window.onload = getUserDetails;