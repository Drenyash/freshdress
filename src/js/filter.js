(function filter() {
    document.addEventListener('DOMContentLoaded', () => {
        const filterElement = document.querySelectorAll('.filter__section');
        filterElement.forEach(element => {
            element.addEventListener('click', function(evt) {
                this.classList.toggle('active')
            })
        })
    })
})();
