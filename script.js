function showLoveMessage() {
    let message = document.getElementById('loveMessage');
    
    // Remove the hidden class to make it visible
    message.classList.remove('hidden');

    // Add fade-in animation
    message.style.opacity = "0";
    message.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => {
        message.style.opacity = "1";
    }, 100);
}