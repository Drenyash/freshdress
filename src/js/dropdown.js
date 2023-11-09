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

        elements.forEach(el => {
            const search = el.querySelector('.search__top')
            const body = el.querySelector('.search__content')
            const footer = el.querySelector('.search__footer')
            el.addEventListener('click', (evt) => {
                el.classList.remove('active')
            })
            if (!search || !body || !footer) return
            search.addEventListener('click', evt => evt.stopPropagation())
            body.addEventListener('click', evt => evt.stopPropagation())
            footer.addEventListener('click', evt => evt.stopPropagation())
        })

        window.addEventListener('keydown', evt => {
            if (evt.keyCode === 27) {
                elements.forEach(item => {
                    item.classList.remove('active')
                })
            }
        })
    })
})()
