const favouriteCount = document.querySelector('[data-user-favorite-count]');
const cartCount = document.querySelector('[data-user-basket-count]');

export const checkBasketCount = (change) => {
    if (!cartCount) return
    if (cartCount && cartCount.textContent === '0') {
        cartCount.classList.add('hidden')
    } else {
        cartCount.classList.remove('hidden')
    }
    updateLocalValues(change, cartCount)
}

export const checkFavouriteCount = (change) => {
    if (!favouriteCount) return
    if (favouriteCount.textContent === '0') {
        favouriteCount.classList.add('hidden')
    } else {
        favouriteCount.classList.remove('hidden')
    }
    updateLocalValues(change, favouriteCount)
}

const updateLocalValues = (change, element) => {
    if (change === 'increment') {
        element.textContent = `${parseInt(element.textContent) + 1}`;
    } else if (change === 'decrement') {
        element.textContent = `${parseInt(element.textContent) - 1}`;
    }
}
