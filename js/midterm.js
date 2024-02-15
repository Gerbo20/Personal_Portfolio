function initializeVanta() {
    VANTA.NET({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2bcf2b,
        backgroundColor: 0x1a143e,
        backgroundSize: "cover"
    });
}
// Call the function to initialize VANTA.NET
initializeVanta();


document.addEventListener('DOMContentLoaded', function() {
    var experienceLink = document.getElementById('experienceLink');
    var experienceSection = document.getElementById('experience');

    experienceLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (scrolling)

        if (experienceSection.style.display === 'block') {
            experienceSection.style.display = 'none';
        } else {
            experienceSection.style.display = 'block';
        }
    });
});

