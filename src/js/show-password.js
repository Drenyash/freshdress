(function showPassword() {
   document.addEventListener('DOMContentLoaded', () => {
       const password = document.querySelectorAll('[data-password]');

       password.forEach(pass => {
           const eye = pass.querySelector('[data-password-view]')
           const eyeOpen = eye.querySelector('[data-eye]')
           const eyeClose = eye.querySelector('[data-eye-close]')
           const input = pass.querySelector('input')

           eye.addEventListener('click', () => {
               if (input.type === 'password') {
                   input.type = 'text'
                   eyeOpen.classList.add('hidden')
                   eyeClose.classList.remove('hidden')
               }
               else {
                   input.type = 'password'
                   eyeOpen.classList.remove('hidden')
                   eyeClose.classList.add('hidden')
               }
           })
       })
   })
})()
