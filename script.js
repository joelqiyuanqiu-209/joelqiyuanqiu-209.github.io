const toggle = document.querySelector('.language-toggle');
const translatable = document.querySelectorAll('[data-en][data-zh]');
let language = 'en';

toggle.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  translatable.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  toggle.textContent = language === 'en' ? '中文' : 'EN';
  toggle.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换至英文');
});
