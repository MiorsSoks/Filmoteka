let spinnerRef = document.querySelector('.spinner');

window.addEventListener('load', () => {
    spinnerRef.classList.add('hidden');

    setTimeout(() => {
        spinnerRef.remove();
    }, 1000);
});

