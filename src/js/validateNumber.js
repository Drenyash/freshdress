(function validateNumber() {
    document.addEventListener('DOMContentLoaded', () => {
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            const maxValue = input.getAttribute('max');
            const minValue = input.getAttribute('min');
            if (!maxValue && !minValue) return
            input.addEventListener('input', () => {
                const numberValue = parseInt(input.value)
                if (numberValue < minValue) {
                    input.value = minValue
                } else if (numberValue >= maxValue) {
                    input.value = maxValue
                }
            })
        })
    })
})()
