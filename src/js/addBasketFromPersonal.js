import axios from "axios";
import {checkBasketCount, checkFavouriteCount} from "./helpers/updateUserValues";

document.addEventListener('DOMContentLoaded', () => {
    const buttonAddBasket = document.querySelectorAll('[data-personal-button][data-product-id]')
    const buttonAddFavourite = document.querySelectorAll('[data-personal-button][data-id]');
    const alert = document.querySelector('[data-message-buy]')
    let timeout = null;

    const url = '/local/ajax/basket/addProduct/'
    const urlFavourite = '/local/ajax/favorites/'

    checkBasketCount()
    checkFavouriteCount()

    const sendData = (url, data) => {
        axios.post(url, data)
            .then(response => {
            })
            .catch(error => console.error(error))
    }

    buttonAddBasket.forEach(el => {
        const data = new FormData();
        data.append('id', el.dataset.productId);
        el.addEventListener('click', () => {
            sendData(url, data);
            timeout = null;
            alert.classList.add('active');
            timeout = setTimeout(() => {
                alert.classList.remove('active')
            }, 3000)
            checkBasketCount('increment')
        })
    })

    const defaultSVGTemplate = () => {
        return `
            <svg class="button__icon">
                <use xlink:href="/assets/sprite/sprite.svg#icon-heart"></use>
            </svg>
        `
    }

    const activeSVGTemplate = () => {
        return `
            <svg class="button__icon">
                <use xlink:href="/assets/sprite/sprite.svg#icon-heart-fill"></use>
            </svg>
        `
    }

    buttonAddFavourite.forEach(el => {
        const data = new FormData();
        data.append('id', el.dataset.id);
        el.addEventListener('click', () => {
            sendData(urlFavourite, data);
            const currentText = el.querySelector('span');
            if (currentText.textContent === 'В избранное') {
                currentText.textContent = 'В избранном'
                el.querySelector('svg').remove();
                el.insertAdjacentHTML('beforeend', activeSVGTemplate())
                checkFavouriteCount('increment')
            } else {
                currentText.textContent = 'В избранное'
                el.querySelector('svg').remove();
                el.insertAdjacentHTML('beforeend', defaultSVGTemplate())
                checkFavouriteCount('decrement')
            }
        })
    })
})
