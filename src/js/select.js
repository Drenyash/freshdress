(function select() {
    document.addEventListener('DOMContentLoaded', () => {
        const select = document.querySelector('[data-select]');
        if (!select) return;

        const selectCurrent = select.querySelector('[data-select-current]')
        const correntTitle = selectCurrent.querySelector('.select__title');
        const correntText = selectCurrent.querySelector('.select__text');
        const selectDropdown = select.querySelector('[data-select-dropdown]')
        const selectItems = select.querySelectorAll('.select__item')

        selectCurrent.addEventListener('click', () => {
            selectDropdown.classList.toggle('active')
        })

        window.addEventListener('click', evt => {
            const currentItem = evt.target;
            if (!select.contains(currentItem) && currentItem !== selectCurrent) selectDropdown.classList.remove('active')
        })

        const update = (title, text, el) => {
            selectItems.forEach(element => element.classList.remove('select__item--current'))
            correntTitle.textContent = title;
            correntText.textContent = text;
            selectCurrent.dataset.validate = el.dataset.selectItem;
            el.classList.add('select__item--current')
        }

        selectItems.forEach(el => {
            const title = el.querySelector('.select__title')
            const text = el.querySelector('.select__text')
            el.addEventListener('click', () => {
                update(title.textContent, text.textContent, el)
            })
        })
    })
})();
