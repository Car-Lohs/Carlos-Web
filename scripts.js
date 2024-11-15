// Get the canvas element and context
var c = document.getElementById("c");
var ctx = c.getContext("2d");

// Make the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// Matrix characters
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}₿";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; // Number of columns for the rain
var drops = [];

// Initialize drops array
for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Draw the matrix effect
function draw() {
    // Semi-transparent black background
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    // Set text properties
    ctx.fillStyle = "#00ff00"; // Rain text color
    ctx.font = font_size + "px arial";

    // Loop through each drop
    for (var i = 0; i < drops.length; i++) {
        // Select a random character
        var text = matrix[Math.floor(Math.random() * matrix.length)];

        // Draw the character
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // Reset the drop after it falls off the screen
        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
    }
}

// Continuously redraw the matrix
setInterval(draw, 35);

// Dynamic message rotation
const messages = [
    "Building with passion...",
    "Stay tuned for something awesome...",
    "Carlos's portfolio is almost here...",
];
let messageIndex = 0;

function updateMessage() {
    const dynamicMessage = document.getElementById("dynamicMessage");
    dynamicMessage.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

// Update messages every 4 seconds
setInterval(updateMessage, 4000);
