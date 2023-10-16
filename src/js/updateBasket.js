(function updateBasket() {
    document.addEventListener('DOMContentLoaded', () => {
        const carts = document.querySelectorAll('[data-cart]');
        let cartItems = document.querySelectorAll('[data-cart-count]')
        const totalPrice = document.querySelector('[data-cart-total]')
        let count = 0;

        carts.forEach(cart => {
            const counterBtnMinus = cart.querySelector('[data-counter-minus]')
            const counterBtnPlus = cart.querySelector('[data-counter-plus]')
            const input = cart.querySelector('[data-counter-input]')
            const cartPrice = cart.querySelector('[data-cart-price]')
            const removeBtn = cart.querySelector('[data-cart-remove]')
            let value = 1;

            counterBtnPlus.addEventListener('click', (evt) => {
                value += 1;
                updateValues(value);
            });

            counterBtnMinus.addEventListener('click', (evt) => {
                if (value > 1) {
                    value -= 1;
                    updateValues(value);
                }
            });

            removeBtn.addEventListener('click', () => {
                cart.remove();
                updateValues(value);
            })
        })

        const updateValues = (value) => {
            count = value;
            cartItems.forEach(el => {
                el.textContent = `${count}`;
            })
        }
        updateValues()
    })
})()
