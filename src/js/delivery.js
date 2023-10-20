(function delivery(){
    document.addEventListener('DOMContentLoaded', () => {
        const deliveryItems = document.querySelectorAll('.delivery__item')

        deliveryItems.forEach(el => {
            el.addEventListener('click', () => {
                deliveryItems.forEach(item => item.classList.remove('active'))
                el.classList.add('active')
            })
        })
    })
})();
