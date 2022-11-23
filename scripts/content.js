const CONTENT_ID = 'topic-content';
const PRINT_HIDE_CLASS = 'print-hide';
const WATERMARK_CLASS = 'rotate-45 q-my-lg';

window.addEventListener('beforeprint', async () => {
  const contentElement = document.getElementById(CONTENT_ID);
  if (contentElement) {
    console.log(contentElement);  
  
    contentElement.classList.remove(PRINT_HIDE_CLASS);
  }
  
  const watermarkedElements = document.getElementsByClassName(WATERMARK_CLASS);
  for(let i=0; i < watermarkedElements.length; i++) {
    watermarkedElements[i].classList.add(PRINT_HIDE_CLASS);
  }
});
console.log('Triumph Service Manual print enabler loaded');