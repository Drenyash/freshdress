import axios from "axios";

(function catalogfilter() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.smartfilter');
        if (!form) return;
        const items = form.querySelectorAll('.filter__item');
        const inps = form.querySelectorAll('input');
        const clearBtn = form.querySelector('#del_filter');
        const moreBtn = document.querySelector('.catalog__wrapper .catalog__button');
        const pages = document.querySelectorAll('.catalog__pagination a');

        inps.forEach(inp => {
            inp.addEventListener('change', changeForm);
        });

        form.addEventListener('submit', submitForm);
        clearBtn.addEventListener('click', clearForm);
        if (moreBtn) {
            moreBtn.addEventListener('click', clickLoadMore);
        }
        pages.forEach(page => {
            page.addEventListener('click', clickPage);
        });

        window.addEventListener('popstate', () => {
            handleNavigation(window.location.pathname, true);
        });

        function handleNavigation(route, update) {
            fetch(route).then(response => {
                if(!response.ok) {
                    throw new Error('Not Found');
                }	
                return response.text();
            }).then(data => {
                let title = data.split('</title>');
                title = title[0].split('<title>');
                title = typeof(title[1]) != 'undefined' ? title[1] : '';
                document.title = title;

                let main = data.split('</main>');
                main = main[0].split('<main class="main">');
                main = typeof(main[1]) != 'undefined' ? main[1] : '';

                if (update) {
                    document.querySelector('.main').innerHTML = main;
                    
                    // +Популярные категории
                    // +Все категории
                    // +Цены
                    // +Инпуты
                    // +Кнопки
                    // +Добавить в избранное
                    // +Добавить в корзину
                    // +Изменение размера
                    // Клик по показать еще 
                    // Клик по страницам
                } else {
                    //console.log(data.querySelector('body'))
                    // Добавляем / изменяем товары
                    // +Добавить в избранное
                    // +Добавить в корзину
                    // +Изменение размера
                    // Заменяем показать еще
                    // Заменяем клик по страницам
                }
                ;
                window.dispatchEvent((new CustomEvent("update-page", {
                    detail: {
                      name: "dog",
                    },
                })));
                // Хлебные крошки Первая секция
                // Фильтр filter__item
                // Товары catalog__products
                // Кнопка еще catalog__button 
                // Страницы catalog__pagination
                // Баннер
                //contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

        function changePage(url, full) {
            handleNavigation(url, full);
            history.pushState({}, '', url); 
        }

        function clickLoadMore(e) {
            e.preventDefault();
            changePage(e.target.href, false)
        }

        function clickPage(e) {
            e.preventDefault();
            changePage(e.target.href, false)
        }

        function clearForm(e) {
            e.preventDefault();
            changePage('', true)
        }

        function submitForm(e) {
            e.preventDefault();
            changePage(form.action, true);
        }

        function changeForm(){
            let que = '?ajax=y';
            items.forEach(item => {
                item.querySelectorAll('input[type="number"]').forEach(inp => {
                    que += '&' + inp.name + '=' + inp.value
                });
                item.querySelectorAll('input[type="checkbox"]:checked').forEach(inp => {
                    que += '&' + inp.name + '=' + inp.value
                });
            });
            axios.get(que)
            .then(response => {
                form.action = response.data.action;
            })
            .catch(error => console.error(error))
        }
    })
})()