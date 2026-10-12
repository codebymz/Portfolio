type Theme = 'light' | 'dark';

let systemThemeListenerAdded = false;

function syncThemeControls(theme: Theme) {
  const isDark = theme === 'dark';

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle="button"]').forEach((button) => {
    button.setAttribute('aria-pressed', String(isDark));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle="lamp"]').forEach((button) => {
    button.setAttribute('aria-checked', String(!isDark));
  });
}

function setTheme(theme: Theme, persist = true, animate = true) {
  if (animate && document.documentElement.getAttribute('data-theme') !== theme) {
    document.body.classList.add('theme-transition');
  }

  document.documentElement.setAttribute('data-theme', theme);
  if (persist) localStorage.setItem('theme', theme);

  const themeColor = document.getElementById('meta-theme-color');
  themeColor?.setAttribute('content', theme === 'dark' ? '#000000' : '#F2F2F7');
  syncThemeControls(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

export function setupThemeControls() {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(theme, false, false);

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle="button"]').forEach((button) => {
    if (button.dataset.themeBound === 'true') return;
    button.dataset.themeBound = 'true';
    button.addEventListener('click', toggleTheme);
  });

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle="lamp"]').forEach((button) => {
    if (button.dataset.themeBound === 'true') return;
    button.dataset.themeBound = 'true';
    button.addEventListener('click', () => {
      const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const assembly = button.querySelector<SVGElement>('.lamp-assembly');

      toggleTheme();

      if (motionReduced) {
        button.classList.remove('is-pulled');
      } else if (assembly) {
        button.classList.remove('is-pulled');
        void assembly.getBoundingClientRect();
        button.classList.add('is-pulled');
      }

      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (touchDevice && !motionReduced && typeof navigator.vibrate === 'function') {
        navigator.vibrate(12);
      }
    });

    button.querySelector('.lamp-assembly')?.addEventListener('animationend', () => {
      button.classList.remove('is-pulled');
    });
  });

  if (!systemThemeListenerAdded) {
    systemThemeListenerAdded = true;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (!localStorage.getItem('theme')) {
        setTheme(event.matches ? 'dark' : 'light', false, false);
      }
    });
  }
}