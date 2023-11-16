import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
    const cardToolbox = document.querySelector('.product-card__toolbox');
    if (!cardToolbox) return
    const buttonAddBasket = cardToolbox.querySelector('[data-product-id]')
    const buttonAddFavourite = cardToolbox.querySelector('[data-id]');

    const url = '/local/ajax/basket/addProduct/'
    const urlFavourite = '/local/ajax/favorites/'

    buttonAddBasket.addEventListener('click', () => {
        const data = new FormData();
        data.append('id', buttonAddBasket.dataset.productId);
        axios.post(url, data)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    })

    buttonAddFavourite.addEventListener('click', () => {
        const data = new FormData();
        data.append('id', buttonAddFavourite.dataset.id);
        axios.post(urlFavourite, data)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    })

})
