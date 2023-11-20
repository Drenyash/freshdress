(function show() {
    document.addEventListener('DOMContentLoaded', () => {
        const showBlock = document.querySelectorAll('[data-show]')

        showBlock.forEach(el => {
            el.addEventListener('click', (evt) => {
                evt.preventDefault()
                // Если присутствует remove, тогда закрываем все выпадашки / активные кроме текущего по которому кликнули
                if (el.dataset.show === 'remove') {
                    showBlock.forEach(item => item.classList.remove('active'))
                }
                el.classList.toggle('active')
            })
        })
    })
})()
