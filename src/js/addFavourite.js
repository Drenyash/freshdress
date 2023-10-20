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
    })
})();
