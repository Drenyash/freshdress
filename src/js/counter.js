(function counter() {
   document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('[data-counter]');

        counters.forEach(counter => {
            const plus = counter.querySelector('[data-counter-plus]');
            const minus = counter.querySelector('[data-counter-minus]');
            const input = counter.querySelector('[data-counter-input]');
            let value = 1;

            plus.addEventListener('click', () => {
                value++
                input.value = value;
            })

            minus.addEventListener('click', () => {
                if (value > 1) {
                    value--;
                    input.value = value;
                }
            })

            input.addEventListener('change', (evt) => {
                if (value >= 1) {
                    value = input.value;
                }
                input.value = value;
            })
        })
   })
})()
