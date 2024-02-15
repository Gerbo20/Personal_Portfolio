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

// Get canvas element
var canvas = document.getElementById('signatureCanvas');
var ctx = canvas.getContext('2d');

// Variables to store mouse position
var mouseX, mouseY;
var isDrawing = false;

// Event listeners to track mouse movements
canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    [mouseX, mouseY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        drawLine(ctx, mouseX, mouseY, e.offsetX, e.offsetY);
        [mouseX, mouseY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});

// Function to draw line between two points
function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = '#000'; // Black color
    context.lineWidth = 2;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}



