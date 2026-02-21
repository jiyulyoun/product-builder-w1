class LottoBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const number = this.getAttribute('number');
    const color = this.getAttribute('color');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: ${color};
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transform: scale(0);
          animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }

        @keyframes pop-in {
          to {
            transform: scale(1);
          }
        }
      </style>
      <div>${number}</div>
    `;
  }
}

customElements.define('lotto-ball', LottoBall);

const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const applyTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
};

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

document.getElementById('generate').addEventListener('click', () => {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';
    const lottoNumbers = new Set();
    while (lottoNumbers.size < 6) {
        lottoNumbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3'];

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const lottoBall = document.createElement('lotto-ball');
            lottoBall.setAttribute('number', number);
            lottoBall.setAttribute('color', colors[index]);
            numbersDiv.appendChild(lottoBall);
        }, index * 200);
    });
});
