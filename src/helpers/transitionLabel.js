export const transitionLabel = () => {
    const labels = document.querySelectorAll('.form-control-login label')

    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    });
};