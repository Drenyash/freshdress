import axios from "axios";
import {checkFavouriteCount} from "./helpers/updateUserValues";

(function addFavourite() {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        const favouriteContainer = document.querySelector('.favorite__body');

        const url = "/local/ajax/favorites/";

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
                    checkFavouriteCount('increment')
                } else if (!addFavoriteButton.classList.contains('active')) {
                    checkFavouriteCount('decrement')
                } else if (!addFavoriteButton.classList.contains('active') && favouriteContainer.contains(addFavoriteButton)) {
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
                    checkFavouriteCount('increment')
                } else {
                    text.textContent = 'В избранное'
                    checkFavouriteCount('decrement')
                }
                sendData(id)
            })
        })
    })
})();
