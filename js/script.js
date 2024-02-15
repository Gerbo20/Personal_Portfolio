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

function initializeVanta2() {
    VANTA.TRUNK({
        el: ".experience",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x135916,
        backgroundColor: 0x102843,
        spacing: 1.50,
        chaos: 3.50
    })
}
// Call the function to initialize VANTA.NET
initializeVanta2();



