(function select() {
    document.addEventListener('DOMContentLoaded', () => {
        const select = document.querySelector('[data-select]');
        if (!select) return;

        const selectCurrent = select.querySelector('[data-select-current]')
        const selectDropdown = select.querySelector('[data-select-dropdown]')

        selectCurrent.addEventListener('click', () => {
            selectDropdown.classList.toggle('active')
        })

        window.addEventListener('click', evt => {
            const currentItem = evt.target;
            if (!select.contains(currentItem) && currentItem !== selectCurrent) selectDropdown.classList.remove('active')
        })
    })
})();
