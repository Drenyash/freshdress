(function filterPoints() {
    document.addEventListener('DOMContentLoaded', () => {
        const toolbox = document.querySelector('[data-toolbox]')
        if (!toolbox) return
        const toolboxEls = toolbox.querySelectorAll('button')
        const timeline = document.querySelector('[data-timeline]')
        if (!timeline) return
        const timelineItems = timeline.querySelectorAll('.timeline__item')
        const timelineArray = Array.from(timelineItems)

        toolboxEls.forEach(element => {
            element.addEventListener('click', () => {
                const currentFilterType = element.dataset.filterType;

                toolboxEls.forEach(el => el.classList.remove('active'))
                element.classList.add('active')

                timelineArray.forEach(el => {
                    if (currentFilterType === 'all') {
                        el.classList.remove('hidden')
                    } else if (el.dataset.filterType === currentFilterType) {
                        el.classList.remove('hidden')
                    } else {
                        el.classList.add('hidden')
                    }
                })
            })
        })
    })
})()
