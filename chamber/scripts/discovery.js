import { places } from '../data/discover.mjs';

const cardContainer = document.getElementById('discover-cards');
const visitorMessage = document.getElementById('visitor-message');
const lastVisit = Number(localStorage.getItem('lastVisit'));
const now = Date.now();

if (!lastVisit) {
    visitorMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const days = Math.floor((now - lastVisit) / 86400000);
    visitorMessage.textContent = days === 0
        ? 'Back so soon! Awesome!'
        : `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
}
localStorage.setItem('lastVisit', String(now));

cardContainer.innerHTML = places.map((place) => `
    <article class="discover-card">
        <h2>${place.name}</h2>
        <figure><img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200"></figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button type="button">Learn More</button>
    </article>
`).join('');

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

