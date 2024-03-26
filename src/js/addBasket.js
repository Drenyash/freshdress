import axios from "axios";
import {checkBasketCount} from "./helpers/updateUserValues";

(function addBasket() {
    function initAddBasket(){
        const cards = document.querySelectorAll('article.card:not(.basketactiv)')
        const buyMessage = document.querySelector('[data-message-buy]')
        const url = '/local/ajax/basket/addProduct/';

        checkBasketCount()

        const sendData = (data) => {
            axios.post(url, data)
                .then(response => {
                    console.log(response)
                    buyMessage.classList.add('active')
                    setTimeout(() => {
                        buyMessage.classList.remove('active')
                    }, 3000)
                })
                .catch(error => console.error(error))
        }

        cards.forEach(card => {
            card.classList.add('basketactiv')
            const sizeItems = card.querySelectorAll('.size__item');
            const addButton = card.querySelector('.card__button');

            sizeItems.forEach(item => {
                item.addEventListener('click', () => {
                    addButton.dataset.product = item.dataset.product;
                    card.querySelector('.card__current-price').innerHTML = item.dataset.price;
                    card.querySelector('.card__previous-price').innerHTML = item.dataset.oldprice ? item.dataset.oldprice : '';
                });
            });
            if (addButton) {
                addButton.addEventListener('click', () => {
                    const data = new FormData();
                    data.append('id', addButton.dataset.product)
                    sendData(data)
                    checkBasketCount('increment')
                })
            }
        })
    }

    document.addEventListener('DOMContentLoaded', initAddBasket)
    window.addEventListener('update-page', initAddBasket)
})()
