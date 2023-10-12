(function addFavourite() {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const addFavoriteButton = card.querySelector('.add-favourite');
            addFavoriteButton.addEventListener('click', () => {
                addFavoriteButton.classList.toggle('active');
            })
        })
    })
})();
