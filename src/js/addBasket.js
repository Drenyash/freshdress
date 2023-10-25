(function addBasket() {
    const cards = document.querySelectorAll('.card')
    const buyMessage = document.querySelector('[data-message-buy]')

    cards.forEach(card => {
        const size = card.querySelector('.size');
        if (!size) return
        const sizeItems = size.querySelectorAll('.size__item');
        const addButton = card.querySelector('.card__button');


        sizeItems.forEach(item => {
            item.addEventListener('click', () => {
                addButton.classList.add('active')
            })
        })

        addButton.addEventListener('click', () => {
            //     Сбор данных для отправки
            buyMessage.classList.add('active')
            setTimeout(() => {
                buyMessage.classList.remove('active')
            }, 3000)
        })
    })
})()
