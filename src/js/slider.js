import Swiper, {EffectCards, EffectCoverflow, EffectCreative, Navigation, Pagination} from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach(slider => {
        if (slider.dataset.slider === 'showcase') {
            const swiper = new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: true,
                initialSlide: 2,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
            })
        } else if (slider.dataset.slider === 'slider') {
            const swiper = new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 6,
                spaceBetween: 30,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
            })
        } else if (slider.dataset.slider === 'cards') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, EffectCoverflow],
                effect: "coverflow",
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 830,
                    modifier: 1,
                    slideShadows: true
                },
                loop: true,
                watchSlidesProgress: true,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
            })
        } else if (slider.dataset.slider === 'stock') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination],
                slidesPerView: 'auto',
                spaceBetween: 16,
                centeredSlides: false,
                watchSlidesProgress: false,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                pagination: {
                    el: '.slider__pagination',
                    bulletClass: 'slider__pagination-bullet',
                    bulletActiveClass: 'slider__pagination-bullet--active',
                },
                breakpoints: {
                    1529: {
                        spaceBetween: 24,
                        centeredSlides: true,
                        watchSlidesProgress: true,
                    }
                }
            })
        }
    })
})
