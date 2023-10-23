(function showPassword() {
   document.addEventListener('DOMContentLoaded', () => {
       const password = document.querySelectorAll('[data-password]');

       password.forEach(pass => {
           const eye = pass.querySelector('[data-password-view]')
           const input = pass.querySelector('input')

           eye.addEventListener('click', () => {
               if (input.type === 'password') input.type = 'text'
               else input.type = 'password'
           })
       })
   })
})()
