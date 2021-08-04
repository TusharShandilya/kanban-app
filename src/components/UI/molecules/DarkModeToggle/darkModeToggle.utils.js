export const setDarkModeInBrowser = (isDark) => {
  localStorage.setItem('_theme', isDark ? 'dark' : 'light')

  const htmlElem = document.querySelector('html')
  htmlElem.setAttribute('data-theme', isDark ? 'dark' : 'light')
}
