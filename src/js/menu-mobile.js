(function menuMobile() {
    document.addEventListener('DOMContentLoaded', () => {
        const burger = document.querySelector('[data-burger]')
        const mobileMenu = document.querySelector('[data-mobile-menu]')
        const menuItems = mobileMenu.querySelectorAll('.header-menu__item');

        const closeMenu = () => {
            mobileMenu.classList.remove('active')
            burger.classList.remove('active')
        }

        window.addEventListener('click', evt => {
            const currentItem = evt.target;
            if (!mobileMenu.contains(currentItem) && currentItem !== burger) {
                closeMenu()
            }
        })

        burger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active')
            if (!burger.classList.contains('active')) {
                menuItems.forEach(item => item.classList.remove('active'))
            }
        })

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (item.querySelector('ul')) {
                    item.classList.toggle('active')
                }
            })
            const list = item.querySelector('.header-menu__list');
            if (!list) return
            list.addEventListener('click', evt => evt.stopPropagation())
        })
    })
})();
