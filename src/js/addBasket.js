import axios from "axios";
import {checkBasketCount} from "./helpers/updateUserValues";

(function addBasket() {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('[data-product]')
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
            const size = card.querySelector('.size');
            if (!size) return
            const sizeItems = size.querySelectorAll('.size__item');
            const addButton = card.querySelector('.card__button');

            sizeItems.forEach(item => {
                item.addEventListener('click', () => {
                    addButton.classList.add('active')
                })
            })

            addButton.addEventListener('click', () => {
                const data = new FormData();
                data.append('id', card.dataset.product)
                sendData(data)
                checkBasketCount('increment')
            })
        })
    })
})()
