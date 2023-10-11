import axios from "axios";

(function form() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelectorAll('[data-form]')

        const getData = () => {
            const els = [...document.querySelectorAll('input'), ...document.querySelectorAll('textarea')];
            const data = new FormData;

            els.forEach(element => {
                if (element.type === 'file') {
                    data.append(element.name, element.value);
                } else {
                    data.append(element.name, element.value);
                }
            })

            return data;
        }

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
