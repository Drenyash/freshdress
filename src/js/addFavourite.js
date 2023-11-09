import axios from "axios";

(function addFavourite() {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        const url = "/local/ajax/favorites/";

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
                } else {
                    text.textContent = 'В избранное'
                }
                sendData(id)
            })
        })
    })
})();
