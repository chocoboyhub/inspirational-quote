const quotes = [
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  'Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill',
  'Start where you are. Use what you have. Do what you can. — Arthur Ashe',
  'Your present circumstances do not determine where you can go; they merely determine where you start. — Nido Qubein',
  'Small steps every day lead to big results. — Unknown',
  'Dream big, start small, and act now. — Robin Sharma'
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-btn');

newQuoteButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
