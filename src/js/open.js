(function open() {
    document.addEventListener('DOMContentLoaded', () => {
        const openButtons = document.querySelectorAll('[data-button-open]');
        const modals = document.querySelectorAll('[data-modal]')

        openButtons.forEach(button => {
            const domArray = Array.from(modals);
            const currentModal = domArray.find(el => el.dataset.modal === button.dataset.buttonOpen);
            
            button.addEventListener('click', () => {
                currentModal.classList.add('active')
                document.querySelector('body').classList.add('fixed-size')
            })
            
            if(currentModal) {
                const closeModal = currentModal.querySelector('[data-close]')

                closeModal.addEventListener('click', () => {
                    currentModal.classList.remove('active')
                    document.querySelector('body').classList.remove('fixed-size')
                })
            }
        })
    })
})()
