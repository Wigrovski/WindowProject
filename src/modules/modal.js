import { animate } from "./helpers" 
const modal = () => {
    const modal = document.querySelector('.header-modal')
    const modalService = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const btn = document.querySelector('.button')
    const btnsService = document.querySelectorAll('.service-button')

    
    btnsService.forEach(btn => {
        btn.addEventListener('click', () => {            
                animate({
                    duration: 80,
                    timing(timeFraction) {
                        return timeFraction
                    },
                    draw(progress) {
                        modalService.style.display = 'block'
                        modalService.style.opacity = '0'
                        setTimeout(() => {
                            modalService.style.transition = 'all .7s ease-in-out'
                            modalService.style.opacity = '1'
                        })
                    }
                }, 50)
            modalService.style.display = 'block'
            overlay.style.display = 'block'
        })
    })

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
    modalService.addEventListener('click', (e) => {
        if ( e.target.classList.contains('services-modal__close')) {
            modalService.style.display = 'none'
            overlay.style.display = 'none'
            modalService.style.opacity = ''
            modalService.style.transition = ''
        }
    })

}


export default modal