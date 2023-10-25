(function tabs() {
   document.addEventListener('DOMContentLoaded', () => {
       const tabs = document.querySelectorAll('[data-tabs]');
       const elements = document.querySelector('[data-tabs-content]')

       tabs.forEach((tab, idx) => {
           tab.addEventListener('click', () => {
               const contentElements = elements.children;
               for (let i = 0; i < contentElements.length; i++) {
                   contentElements[i].classList.remove('active')
               }
               tabs.forEach(el => el.classList.remove('active'));
               tab.classList.add('active');
               contentElements[idx].classList.add('active')
           })
       })
   })
})()
