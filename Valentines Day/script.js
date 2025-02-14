let heartFill = 0;
let isHeartFull = false;

// Function to Start Heart Filling
function startHeartFilling() {
    document.querySelector('.main-container').style.display = 'none'; // Hide Main Page
    document.querySelector('.heart-container').style.display = 'flex';
}

// Function to Handle Heart Taps
function tapHeart() {
    if (isHeartFull) return;

    let heart = document.querySelector('.heart-fill');
    heartFill += 10;

    if (heartFill >= 100) {
        isHeartFull = true;
        heart.style.height = "100%";
        showPhotos(); // Show the photos after heart is filled
    } else {
        heart.style.height = `${heartFill}%`;
    }
}

// Show Photos in Heart Shape
function showPhotos() {
    document.querySelector('.heart-fill').style.backgroundColor = "#ff4d6d"; // Make it a full red heart
    setTimeout(() => {
        document.querySelector('.heart-container').style.display = 'none';
        document.querySelector('.photo-gallery').style.display = 'flex';
    }, 1000);
}

// No Button Moves Around and Changes Text
function moveButton() {
    let button = document.querySelector('.no-btn');
    let messages = ["Sige na Nikki!😆", "Nope, not allowed! 😜", "Are you sure? 🥺", "Sige na Baby"];
    button.innerText = messages[Math.floor(Math.random() * messages.length)];

    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 100);
    button.style.position = "absolute";
    button.style.left = `${Math.max(10, x)}px`;
    button.style.top = `${Math.max(10, y)}px`;
}

// Falling Flowers Effect
function createFallingFlowers() {
    const container = document.querySelector(".flowers-container");

    for (let i = 0; i < 20; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerHTML = "🌸";
        flower.style.position = "absolute";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        flower.style.fontSize = Math.random() * 20 + 15 + "px";
        container.appendChild(flower);
    }
}

document.addEventListener("DOMContentLoaded", createFallingFlowers);
const noButton = document.querySelector('.no-btn');
const yesButton = document.querySelector('.yes-btn');
const message = document.querySelector('.final-message');

// Function to move "No" button randomly
function moveButton(event) {
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let newX = Math.random() * (viewportWidth - noButton.clientWidth);
    let newY = Math.random() * (viewportHeight - noButton.clientHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Add event listeners for both desktop and mobile
noButton.addEventListener("mouseenter", moveButton); // For desktop hover
noButton.addEventListener("touchstart", moveButton); // For mobile tap

// Yes button click function
yesButton.addEventListener("click", function() {
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.heart-container').style.display = 'block';
});
