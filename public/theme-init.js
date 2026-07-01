// Initialize theme before page render to prevent flash of unstyled content
// theme preference: 'light' | 'dark' explicit choice, or absent = follow system
(function() {
  const stored = localStorage.getItem('theme');
  const preference = stored === 'light' || stored === 'dark' ? stored : 'system';
  const theme = preference === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : preference;
  document.documentElement.dataset.theme = theme;
})();