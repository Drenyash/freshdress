import axios from "axios";

(function dropdown() {
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('[data-open]')
        const elements = document.querySelectorAll('[data-dropdown]')
        const url = ''

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

        const sendData = (value) => {
            const data = new FormData();
            data.append('value', value);
            axios.post(url, data)
                .then(response => console.log(response))
                .catch(error => console.error(error));
        }

        const clearInputValue = (el) => {
            const input = el.querySelector('[data-search-input]')
            const clear = el.querySelector('[data-search-clear]')

            if (!input || !clear) return

            clear.addEventListener('click', () => {
                if (input.value.length > 0) {
                    input.value = ''
                }
            })
        }

        elements.forEach(el => {
            clearInputValue(el)
            const close = el.querySelector('.search__close')
            const input = el.querySelector('[data-search-input]')
            if (input) {
                input.addEventListener('input', () => {
                    if (input.value.length > 3) {
                        sendData(input.value)
                    }
                })
            }
            if (!close) return
            close.addEventListener('click', () => {
                el.classList.remove('active')
                links.forEach(el => el.classList.remove('active'))
            })
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
