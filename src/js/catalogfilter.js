import axios from "axios";

(function catalogfilter() {
    let isFirstStart = true;
    function handleNavigation(route, mode) {
        fetch(route).then(response => {
            if(!response.ok) {
                throw new Error('Not Found');
            }	
            return response.text();
        }).then(data => {
            document.querySelector('.main').classList.remove('loading');
            let title = data.split('</title>');
            title = title[0].split('<title>');
            title = typeof(title[1]) != 'undefined' ? title[1] : '';
            document.title = title;

            let main = data.split('</main>');
            main = main[0].split('<main class="main">');
            main = typeof(main[1]) != 'undefined' ? main[1] : '';

            if (mode == 'add' || mode == 'change') {
                let wrapProducts = document.querySelector('.catalog__products');
                let products = data.split('<!--#PRODUCTS-->');
                products = products[0].split('<!--PRODUCTS-->');
                products = typeof(products[1]) != 'undefined' ? products[1] : '';
                if (products) {
                    if (mode == 'add') {
                        wrapProducts.insertAdjacentHTML('beforeend', products);
                    } else {
                        wrapProducts.innerHTML = products;
                    }
                }
                let nav = data.split('<!--#NAV-->');
                nav = nav[0].split('<!--NAV-->');
                nav = typeof(nav[1]) != 'undefined' ? nav[1] : '';
                
                let oldButton = document.querySelector('.catalog__button');
                let oldPages = document.querySelector('.catalog__pagination');

                if(oldButton) oldButton.remove();
                if(oldPages) oldPages.remove();

                wrapProducts.insertAdjacentHTML('afterEnd', nav);
                
            } else {
                document.querySelector('.main').innerHTML = main;
            }
            window.dispatchEvent((new CustomEvent("update-page")));
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function initCatalogFilter(){
        const form = document.querySelector('.smartfilter');
        if (!form) return;

        if (isFirstStart) {
            isFirstStart = false;
            window.addEventListener('popstate', () => {
                handleNavigation(window.location.pathname, 'all');
            });
        }
        const items = form.querySelectorAll('.filter__item');
        const inps = form.querySelectorAll('input');
        const clearBtn = form.querySelector('#del_filter');
        const moreBtn = document.querySelector('.catalog__wrapper .catalog__button');
        const pages = document.querySelectorAll('.catalog__pagination a');
        const catsLinks = document.querySelectorAll('.categories__item[href]');
        const filterLinks = document.querySelectorAll('.filter__link[href]');
        const filterElements = document.querySelectorAll('.filter__element[href]');

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

        
        catsLinks.forEach(link => {
            link.addEventListener('click', (e)=>{
                e.preventDefault();
                changePage(link.href, 'all')
            });
        });
        filterLinks.forEach(link => {
            link.addEventListener('click', (e)=>{
                e.preventDefault();
                changePage(link.href, 'all')
            });
        });
        filterElements.forEach(link => {
            link.addEventListener('click', (e)=>{
                e.preventDefault();
                changePage(link.href, 'all')
            });
        });

        function changePage(url, full) {
            handleNavigation(url, full);
            document.querySelector('.main').classList.add('loading');
            history.pushState({}, '', url); 
        }

        function clickLoadMore(e) {
            e.preventDefault();
            changePage(e.target.href, 'add')
        }

        function clickPage(e) {
            e.preventDefault();
            changePage(e.target.href, 'change')
        }

        function clearForm(e) {
            e.preventDefault();
            changePage(window.location.pathname.split('filter')[0], 'all')
        }

        function submitForm(e) {
            e.preventDefault();
            changePage(form.action, 'all');
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
    }

    document.addEventListener('DOMContentLoaded', initCatalogFilter)
    window.addEventListener('update-page', initCatalogFilter)
})()