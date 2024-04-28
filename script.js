const logger = document.getElementById('logger');
let pressedKeys = {};

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Check if the key is not already pressed
    if (!pressedKeys[key]) {
        pressedKeys[key] = true;
        logKey(key);
    }
});

// Event listener for keyup event
document.addEventListener('keyup', function(event) {
    const key = event.key;
    // Set the key state to false when released
    pressedKeys[key] = false;
});

// Function to log key pressed
function logKey(key) {
    // Append key to the textarea
    logger.value += key;
}
