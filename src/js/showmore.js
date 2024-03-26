(function showmore() {
    document.addEventListener('DOMContentLoaded', () => {
        const openButtons = document.querySelectorAll('.js-more-show');
        const hideButtons = document.querySelectorAll('.js-more-hide');

        openButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const li = e.target.parentNode;
                let next = li.nextSibling;
                li.style.display = 'none';
                while(next) {
                    if (typeof(next.style) != 'undefined') next.style.display = 'flex';
                    next = next.nextSibling;
                }
            })
        })
        hideButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const li = e.target.parentNode;
                let prev = li.previousSibling;
                li.style.display = 'none';
                while(prev) {
                    if (typeof(prev.style) != 'undefined') prev.style.display = 'none';
                    if(typeof(prev.classList) != 'undefined' && prev.classList.contains('filter__item--more')) {
                        prev.style.display = 'flex';
                        break;
                    }
                    prev = prev.previousSibling;
                }
            })
        })
    })
})()