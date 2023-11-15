import axios from "axios";

(function updateBasket() {
    document.addEventListener('DOMContentLoaded', () => {
        const carts = document.querySelectorAll('[data-cart]');
        const cartCount = document.querySelector('[data-cart-count]')
        const price = document.querySelector('[data-cart-total]')
        const positions = document.querySelector('[data-cart-position]')
        const removePosition = document.querySelectorAll('[data-cart-remove-position]')
        let checkedItems = document.querySelectorAll('[data-cart-check]')
        const selectAll = document.querySelector('[data-cart-select-all]')
        const removeAll = document.querySelectorAll('[data-basket-removeAll]')
        const discount = document.querySelector('[data-cart-discount]')
        const total = document.querySelector('[data-basket-total]')
        const openBtn = document.querySelector('[data-open-checkbox]')
        const removeMobile = document.querySelector('[data-basket-remove-mobile]')
        const cartBody = document.querySelector('.cart__body')
        const cartTotal = document.querySelector('.total')
        const cartEmpty = document.querySelector('[data-empty]')
        const removeUrl = '/local/ajax/basket/deleteProduct/';
        const updateUrl = '/local/ajax/basket/updateProductCount/'

        const sendData = (data, url = removeUrl) => {
            axios.post(url, data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.error(error));
        }

        carts.forEach(cart => {
            const plusBtn = cart.querySelector('[data-counter-plus]')
            const minusBtn = cart.querySelector('[data-counter-minus]')
            const removeBtn = cart.querySelector('[data-cart-remove]')
            const check = cart.querySelector('[data-cart-check]')
            let currentCount = 1;
            let checked = false;

            plusBtn.addEventListener('click', () => {
                const data = new FormData();
                currentCount++;
                updateValues(carts)
                data.append('id', cart.dataset.cart)
                data.append('count', currentCount)
                sendData(data, updateUrl);
            })
            minusBtn.addEventListener('click', () => {
                const data = new FormData();
                if (currentCount > 1) {
                    currentCount--;
                    updateValues(carts)
                }
                data.append('id', cart.dataset.cart)
                data.append('count', currentCount)
                sendData(data, updateUrl);
            })
            removeBtn.addEventListener('click', () => {
                const data = new FormData();
                cart.remove()
                data.append('id', cart.dataset.cart)
                sendData(data)
                updateValues(carts)
                removePositions(carts)
            })
            check.addEventListener('click', () => {
                checked = !checked
                removePositions(carts)
            })
        })

        if (!selectAll) return
        selectAll.addEventListener('click', () => {
            const selectInput = selectAll.querySelector('input');
            checkedItems.forEach(el => {
                el.checked = selectInput.checked;
            })
            removePositions(carts)
        })
        if (!openBtn) return
        openBtn.addEventListener('click', () => {
            if (openBtn.textContent === 'Выбрать') {
                openBtn.textContent = 'Отменить'
                removeMobile.classList.remove('hidden')
            } else {
                openBtn.textContent = 'Выбрать'
                removeMobile.classList.add('hidden')
            }
            checkedItems.forEach(el => {
                el.classList.toggle('active')
            })
        })

        const updateValues = (carts) => {
            carts = document.querySelectorAll('[data-cart]');
            let count = 0;
            let currentPrice = 0;
            carts.forEach(el => {
                const input = el.querySelector('[data-counter-input]')
                const elPrice = el.querySelector('[data-cart-price]')
                count += parseInt(input.value);
                currentPrice += parseInt(input.value) * parseInt(elPrice.textContent.replace(" ", ''))
            })
            price.textContent = currentPrice;
            cartCount.textContent = `${count}`
            if (discount) {
                total.textContent = `${currentPrice - discount.textContent.replace(" ", '')}`
            } else {
                total.textContent = `${currentPrice}`
            }
            positions.textContent = carts.length;
        }
        updateValues(carts)

        const removePositions = (carts) => {
            carts = document.querySelectorAll('[data-cart]');
            let checked = [];
            carts.forEach(el => {
                const checkedItem = el.querySelector('[data-cart-check]')
                if (checkedItem.checked) {
                    checked.push(el)
                }
            })
            removePosition.forEach(el => {
                el.textContent = checked.length;
            })
            if (carts.length <= 0) {
                cartBody.classList.add('hidden')
                cartTotal.classList.add('hidden')
                cartEmpty.classList.add('active')
            }
        }

        removeAll.forEach(removeBtn => {
            removeBtn.addEventListener('click', () => {
                const selectInput = selectAll.querySelector('input');
                let checked = document.querySelectorAll('[data-cart-check]:checked');
                let checkedItems = document.querySelectorAll('[data-cart-check]');
                const data = new FormData();
                const cartId = []

                for (let i = 0; i < checked.length; i++) {
                    cartId.push(parseInt(checked[i].parentNode.dataset.cart))
                }
                data.append('id', JSON.stringify(cartId))
                sendData(data);

                checked.forEach(el => {
                    el.closest('[data-cart]').remove();
                    updateValues(carts);
                });
                selectInput.checked = false;
                checked = document.querySelectorAll('[data-cart-check]:checked');
                checkedItems = document.querySelectorAll('[data-cart-check]');
                removePosition.forEach(el => {
                    el.textContent = checked.length;
                })
                if (checkedItems.length <= 0) {
                    cartBody.classList.add('hidden')
                    cartTotal.classList.add('hidden')
                    cartEmpty.classList.add('active')
                }
            })
        })
    })
})()
