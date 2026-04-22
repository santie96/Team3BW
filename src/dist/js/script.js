let openBars = document.getElementById('open-bars-js');
let closedBars = document.getElementById('closed-bars-js');
let barsMobile = document.getElementById('bars-mobile-js');

openBars.addEventListener('click', () => {
    barsMobile.classList.add('open');
    openBars.parentElement.style.display = 'none';
    closedBars.parentElement.style.display = 'flex';
});

closedBars.addEventListener('click', () => {
    barsMobile.classList.remove('open');
    openBars.parentElement.style.display = 'flex';
    closedBars.parentElement.style.display = 'none';
});