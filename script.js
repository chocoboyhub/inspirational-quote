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
const themeToggleButton = document.getElementById('theme-toggle-btn');
const darkThemeClass = 'dark-theme';

function updateThemeButtonText() {
  const usingDarkTheme = document.body.classList.contains(darkThemeClass);
  themeToggleButton.textContent = usingDarkTheme
    ? 'Switch to Light Theme'
    : 'Switch to Dark Theme';
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add(darkThemeClass);
  } else {
    document.body.classList.remove(darkThemeClass);
  }

  localStorage.setItem('theme', theme);
  updateThemeButtonText();
}

newQuoteButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});

themeToggleButton.addEventListener('click', () => {
  const usingDarkTheme = document.body.classList.contains(darkThemeClass);
  setTheme(usingDarkTheme ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
