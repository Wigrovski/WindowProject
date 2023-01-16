import { animate } from "./helpers" 
const modal = () => {
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const btn = document.querySelector('.button')

    btn.addEventListener('click', () => {
        animate({
            duration: 80,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                modal.style.display = 'block'
                modal.style.opacity = '0'
                setTimeout(() => {
                    modal.style.transition = 'all .4s ease-in-out'
                    modal.style.opacity = '1'
                })
            }
        }, 50)
        modal.style.display = 'block'
        overlay.style.display = 'block'
    })
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-modal__close')) {
            modal.style.display = 'none'
            overlay.style.display = 'none'
            modal.style.opacity = ''
            modal.style.transition = ''
        }
    })


}


export default modal