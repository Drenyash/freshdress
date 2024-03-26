(function show() {
    document.addEventListener('DOMContentLoaded', () => {
        const showBlock = document.querySelectorAll('[data-show]')

        showBlock.forEach(el => {
            el.classList.add('activated')
            const filterTitle = el.querySelector('.filter__element');
            if (filterTitle) {
                filterTitle.addEventListener('click', (evt) => {
                    evt.preventDefault()
                    // Если присутствует remove, тогда закрываем все выпадашки / активные кроме текущего по которому кликнули
                    if (el.dataset.show === 'remove') {
                        showBlock.forEach(item => item.classList.remove('active'))
                    }
                    el.classList.toggle('active')
                })
            }
        })

        window.addEventListener('update-page', () => {
            let showBlockNew = document.querySelectorAll('[data-show]:not(.activated)')

            showBlockNew.forEach(el => {
                const filterTitleNew = el.querySelector('.filter__element');
                if (filterTitleNew) {
                    filterTitleNew.addEventListener('click', (evt) => {
                        evt.preventDefault()
                        // Если присутствует remove, тогда закрываем все выпадашки / активные кроме текущего по которому кликнули
                        if (el.dataset.show === 'remove') {
                            showBlock.forEach(item => item.classList.remove('active'))
                        }
                        el.classList.toggle('active')
                    })
                }
            })
        });
    })
})()
