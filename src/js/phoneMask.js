import inputmask from "inputmask/lib/inputmask";

(function phoneMask() {
    document.addEventListener('DOMContentLoaded', () => {
        const allInputs = document.querySelectorAll('input');

        allInputs.forEach(el => {
            if (el.type === 'tel') {
                inputmask({"mask": "+7 (999) 999-99-99"}).mask(el);
            } else if (el.type === 'email') {
                inputmask("email").mask(el);
            }
        })
    })
})()
