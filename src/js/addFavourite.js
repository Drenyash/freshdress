(function addFavourite() {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const addFavoriteButton = card.querySelector('.add-favourite');
            if (!addFavoriteButton) return
            addFavoriteButton.addEventListener('click', () => {
                addFavoriteButton.classList.toggle('active');
            })
        })
        const addFavorite = document.querySelectorAll('.add-favourite');

        addFavorite.forEach(el => {
            const text = el.querySelector('span');
            if (!text) return
            el.addEventListener('click', () => {
                el.classList.toggle('active');
                if (el.classList.contains('active')) {
                    text.textContent = 'В избранном'
                } else {
                    text.textContent = 'В избранное'
                }
            })
        })
    })
})();
