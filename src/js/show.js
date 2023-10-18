(function show() {
   document.addEventListener('DOMContentLoaded', () => {
       const showBlock = document.querySelectorAll('[data-show]')
       showBlock.forEach(el => {
           el.addEventListener('click', () => {
               el.classList.toggle('active');
           })
       })
   })
})()
