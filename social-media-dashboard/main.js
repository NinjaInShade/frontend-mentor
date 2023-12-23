const body = document.body;
const ThemeSwitchTxt = document.getElementById('theme-switch-txt');
const ThemeSwitchBtn = document.getElementById('theme-switch-btn');

// CSS doesnt have sibling selector, so hovering over switch theme button needs javascript to add hover effect to sibling
ThemeSwitchBtn.addEventListener('mouseover', () => {
  ThemeSwitchTxt.classList.add('theme-switch-text-hover');
});

ThemeSwitchBtn.addEventListener('mouseout', () => {
  ThemeSwitchTxt.classList.remove('theme-switch-text-hover');
});

ThemeSwitchBtn.addEventListener('click', () => {
  switchTheme();
});

// Toggles body class
function updateThemeClasses() {
  body.classList.toggle('dark-theme');
}

// Switch light themes
function switchTheme() {
  // If it contains dark-theme class, we're switching to light theme
  if (body.classList.contains('dark-theme')) {
    ThemeSwitchTxt.innerText = 'Dark mode';

    localStorage.setItem('theme', 'light');
  } else {
    ThemeSwitchTxt.innerText = 'Light mode';

    localStorage.setItem('theme', 'dark');
  }

  return updateThemeClasses();
}

function initTheme() {
  // If user has dark preference, set the dark theme by default.

  // LocalStorage overrides this however, as the user has then changed the theme,
  // which we want to persist to those settings then.
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') {
    ThemeSwitchTxt.innerText = 'Light mode';

    return updateThemeClasses();
  }

  if (prefersDarkScheme.matches) {
    ThemeSwitchTxt.innerText = 'Light mode';

    return updateThemeClasses();
  }
}

async function fetchData() {}

// Default theme to be activated
initTheme();

// Fetches data from API's
fetchData();
