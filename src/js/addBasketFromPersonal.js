import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
    const buttonAddBasket = document.querySelectorAll('[data-personal-button][data-product-id]')
    const buttonAddFavourite = document.querySelectorAll('[data-personal-button][data-id]');
    const alert = document.querySelector('[data-message-buy]')
    const favouriteCount = document.querySelector('[data-user-favorite-count]');
    const cartCount = document.querySelector('[data-user-basket-count]');
    let timeout = null;

    const url = '/local/ajax/basket/addProduct/'
    const urlFavourite = '/local/ajax/favorites/'

    const checkBasketCount = () => {
        if (cartCount.textContent === '0') {
            cartCount.classList.add('hidden')
        } else {
            cartCount.classList.remove('hidden')
        }
    }

    const checkFavouriteCount = () => {
        if (favouriteCount.textContent === '0') {
            favouriteCount.classList.add('hidden')
        } else {
            favouriteCount.classList.remove('hidden')
        }
    }

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
            cartCount.textContent = `${parseInt(cartCount.textContent) + 1}`;
            checkBasketCount()
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
                favouriteCount.textContent = `${parseInt(favouriteCount.textContent) + 1}`;
                checkFavouriteCount()
            } else {
                currentText.textContent = 'В избранное'
                el.querySelector('svg').remove();
                el.insertAdjacentHTML('beforeend', defaultSVGTemplate())
                favouriteCount.textContent = `${parseInt(favouriteCount.textContent) - 1}`;
                checkFavouriteCount()
            }
        })
    })
})
