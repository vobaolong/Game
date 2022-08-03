const topBtn = document.querySelector('.to-top-btn')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        topBtn.classList.add('active')
    } else {
        topBtn.classList.remove('active')
    }
})