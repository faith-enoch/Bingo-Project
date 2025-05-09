// File: script.js
const generateBtn = document.getElementById('generateBtn');
const itemsEl = document.getElementById('items');
const countEl = document.getElementById('count');
const cardsContainer = document.getElementById('cards');

function shuffle(array) {
let current = array.length, temp, random;
while (current) {
random = Math.floor(Math.random() * current--);
temp = array[current]; array[current] = array[random]; array[random] = temp;
}
return array;
}

generateBtn.addEventListener('click', () => {
const raw = itemsEl.value.trim();
const terms = raw.split(',').map(t => t.trim()).filter(t => t);
if (terms.length < 24) {
alert('Please enter at least 24 unique items.');
return;
}
const cardCount = parseInt(countEl.value, 10);
cardsContainer.innerHTML = '';

for (let c = 0; c < cardCount; c++) {
const card = document.createElement('div');
card.className = 'bingo-card';
