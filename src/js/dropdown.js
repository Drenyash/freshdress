(function dropdown() {
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('[data-open]')
        const elements = document.querySelectorAll('[data-dropdown]')

        links.forEach((el, idx) => {
            el.addEventListener('click', (evt) => {
                evt.preventDefault()
                const els = Array.from(elements)
                const currentItem = els.filter(els => els.dataset.dropdown === el.dataset.open)

                if (!el.classList.contains('active') && currentItem) {
                    links.forEach(link => link.classList.remove('active'))
                    elements.forEach(element => element.classList.remove('active'))

                    el.classList.add('active');
                    currentItem[0].classList.add('active');
                } else {
                    el.classList.remove('active');
                    currentItem[0].classList.remove('active');
                }
            })
        })
    })
})()
