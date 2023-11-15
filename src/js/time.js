document.addEventListener('DOMContentLoaded', () => {
    const timeToDate = new Date(document.querySelector('[data-unix]').dataset.unix);

    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    const dayItems = document.querySelectorAll('.stock-counter__item');

    console.log(dayItems)
    function countdownTimer() {
        const diff = timeToDate - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        dayItems[0].querySelector('.stock-counter__number').textContent = days < 10 ? '0' + days : days;
        dayItems[1].querySelector('.stock-counter__number').textContent = hours < 10 ? '0' + hours : hours;
        dayItems[2].querySelector('.stock-counter__number').textContent = minutes < 10 ? '0' + minutes : minutes;
        dayItems[3].querySelector('.stock-counter__number').textContent = seconds < 10 ? '0' + seconds : seconds;

        dayItems[0].querySelector('.stock-counter__text').textContent = declensionNum(days, ['день', 'дня', 'дней']);
        dayItems[1].querySelector('.stock-counter__text').textContent = declensionNum(hours, ['час', 'часа', 'часов']);
        dayItems[2].querySelector('.stock-counter__text').textContent = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        dayItems[3].querySelector('.stock-counter__text').textContent = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
})
