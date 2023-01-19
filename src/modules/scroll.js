export const scroll = () => {
    const btnTop = document.querySelector('.smooth-scroll')

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 860) {
        btnTop.style.display = 'block'
    } else {btnTop.style.display = 'none'}
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
    })
})
}