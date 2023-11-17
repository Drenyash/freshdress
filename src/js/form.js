import axios from "axios";

(function form() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelectorAll('[data-form]')
        const els = [...document.querySelectorAll('[data-validate]')];
        const customInput = document.querySelectorAll('.validate');
        const bonuses = document.querySelector('[data-bonuses]')

        const getData = () => {
            const data = new FormData;

            els.forEach(element => {
                if (element.type === 'file') {
                    data.append(element.name, element.value);
                } else if (element.type === 'radio' && element.checked) {
                    data.append(element.name, element.value)
                } else if (element.dataset.validate.length) {
                    data.append('id', element.dataset.validate)
                } else if (element.type !== 'radio' && element.type !== 'file') {
                    data.append(element.name, element.value);
                    element.value = '';
                }
            })

            if (bonuses) {
                const bonusesCount = bonuses.querySelector('[data-bonuses-count]')
                const bonusesToggle = bonuses.querySelector('[data-bonuses-toggle]')
                if (bonusesToggle.checked) {
                    data.append('bonuses', bonusesCount.value)
                }
            }

            return data;
        }

        const validate = (element, validEl, invalidEl) => {
            element.addEventListener('change', () => {
                if (element.validity.valid) {
                    element.classList.add('valid')
                    element.classList.remove('invalid')
                    if (!validEl || !invalidEl) return
                    invalidEl.classList.add('hidden')
                    validEl.classList.remove('hidden')
                } else {
                    element.classList.remove('valid')
                    element.classList.add('invalid')
                    if (!validEl || !invalidEl) return
                    invalidEl.classList.remove('hidden')
                    validEl.classList.add('hidden')
                }
            })
        }

        customInput.forEach(el => {
            const input = el.querySelector('input')
            const validEl = el.querySelector('.validate__valid');
            const invalidEl = el.querySelector('.validate__invalid');
            validate(input, validEl, invalidEl)
        })

        const sendData = (url, form) => {
            axios.post(url, getData())
                .then(response => {
                    if (response.data.success) {
                        window.location.href = response.data.url;
                    }
                    form.querySelectorAll('input').value = '';
                })
                .catch(error => console.error(error))

            const formEls = form.querySelectorAll('input');
            formEls.forEach(el => {
                if (el.type !== 'radio') {
                    el.value = '';
                }
                el.classList.remove('valid')
                el.classList.remove('invalid')
                if (!el.parentNode.querySelector('.validate__valid')
                    ||
                    !el.parentNode.querySelector('.validate__invalid')) return
                el.parentNode.querySelector('.validate__valid').classList.add('hidden')
                el.parentNode.querySelector('.validate__invalid').classList.add('hidden')
            })
        }

        form.forEach(formItem => {
            const checked = formItem.querySelector('[data-checked]');
            const submitBtn = formItem.querySelector('button[type="submit"]');
            checked.addEventListener('click', () => {
                checked.toggleAttribute('checked')
                if (checked.checked) {
                    submitBtn.removeAttribute('disabled');
                } else {
                    submitBtn.setAttribute('disabled', true);
                }
            })
            formItem.addEventListener('submit', (evt) => {
                evt.preventDefault();
                const action = formItem.getAttribute('action')
                sendData(action, formItem)
            })
        })
        const orderButton = document.querySelector('[data-order]')
        if (!orderButton) return
        orderButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            form.forEach(formItem => {
                const action = formItem.getAttribute('action')
                if (!formItem.classList.contains('form-news')) sendData(action, formItem)
            })
        })
    })
})();
