import axios from "axios";

(function addFavourite() {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        const favouriteContainer = document.querySelector('.favorite__body');
        const favouriteCount = document.querySelector('[data-user-favorite-count]');

        const url = "/local/ajax/favorites/";

        const checkFavouriteCount = () => {
            if (favouriteCount.textContent === '0') {
                favouriteCount.classList.add('hidden')
            } else {
                favouriteCount.classList.remove('hidden')
            }
        }

        checkFavouriteCount()

        const sendData = (id) => {
            const data = new FormData();
            data.append('id', id)
            axios.post(url, data)
                .then(response => console.log(response))
                .catch(error => console.error(error))
        }

        cards.forEach(card => {
            const addFavoriteButton = card.querySelector('.add-favourite');
            if (!addFavoriteButton) return
            addFavoriteButton.addEventListener('click', () => {
                addFavoriteButton.classList.toggle('active');
                const id = addFavoriteButton.dataset.id;
                sendData(id)
                if (addFavoriteButton.classList.contains('active')) {
                    favouriteCount.textContent = `${parseInt(favouriteCount.textContent) + 1}`;
                    checkFavouriteCount()
                }
                if (!addFavoriteButton.classList.contains('active')) {
                    favouriteCount.textContent = `${parseInt(favouriteCount.textContent) - 1}`;
                    checkFavouriteCount()
                }
                if (!addFavoriteButton.classList.contains('active') && favouriteContainer.contains(addFavoriteButton)) {
                    card.remove()
                }
            })
        })
        const addFavorite = document.querySelectorAll('.add-favourite');

        addFavorite.forEach(el => {
            const text = el.querySelector('span');
            if (!text) return
            el.addEventListener('click', () => {
                const id = el.dataset.id;
                el.classList.toggle('active');
                if (el.classList.contains('active')) {
                    text.textContent = 'В избранном'
                    favouriteCount.textContent = `${parseInt(favouriteCount.textContent) + 1}`;
                    checkFavouriteCount()
                } else {
                    text.textContent = 'В избранное'
                    favouriteCount.textContent = `${parseInt(favouriteCount.textContent) - 1}`;
                    checkFavouriteCount()
                }
                sendData(id)
            })
        })
    })
})();
