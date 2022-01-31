window.addEventListener('DOMContentLoaded', (event) => {
    const rocket = document.querySelector('.rocket');
    setTimeout(() => {
        rocket.className = 'explosion';
    }, 3000);

    setTimeout(() => {
        rocket.className = 'bye';
    }, 5500);
});