export const scroll = () => {
    const btnTop = document.querySelector('.smooth-scroll')
    btnTop.style.display = 'none'
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 857) {
        btnTop.style.display = 'block'
    } else {btnTop.style.display = 'none'}
    btnTop.addEventListener('click', () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })
    })
})
}