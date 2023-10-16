import axios from "axios";

(function form() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelectorAll('[data-form]')
        const els = [...document.querySelectorAll('[data-validate]')];
        const customInput = document.querySelectorAll('.custom-input');

        const getData = () => {
            const data = new FormData;

            els.forEach(element => {
                if (element.type === 'file') {
                    data.append(element.name, element.value);
                } else {
                    data.append(element.name, element.value);
                    element.value = '';
                }
            })

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

        els.forEach(element => {
            validate(element)
        })

        customInput.forEach(el => {
            const input = el.querySelector('input')
            const validEl = el.querySelector('.custom-input__valid');
            const invalidEl = el.querySelector('.custom-input__invalid');
            validate(input, validEl, invalidEl)
        })

        const sendData = (url, form) => {
            axios.post(url, getData())
                .then(response => {
                    console.log(response)
                    form.querySelectorAll('input').value = '';
                })
                .catch(error => console.error(error))

            const formEls = form.querySelectorAll('input');
            formEls.forEach(el => {
                el.value = '';
            })
        }

        form.forEach(formItem => {
            formItem.addEventListener('submit', (evt) => {
                evt.preventDefault();
                const action = formItem.getAttribute('action')
                sendData(action, formItem)
            })
        })
    })
})();
