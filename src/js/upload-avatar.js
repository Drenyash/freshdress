(function uploadAvatar() {
   document.addEventListener('DOMContentLoaded', () => {
       const avatar = document.querySelector('[data-avatar]');
       const avatarImage = document.querySelector('[data-avatar-image]');
       if (!avatar) return
       const avatarInput = avatar.querySelector('input');
       const avatarIcon = avatar.querySelector('[data-avatar-icon]')

       avatarInput.addEventListener('change', (evt) => {
           const reader = new FileReader()
           const file = avatarInput.files[0]

           reader.addEventListener('load', (evt) => {
               avatarImage.src = evt.target.result
           })

           if (file) {
               reader.readAsDataURL(file)
               avatarImage.classList.remove('hidden')
               avatarIcon.classList.add('hidden')
           }
       })
   })
})()
