import Swiper, { Navigation } from 'swiper'
import 'swiper/css'

export const clientsSlider = () => {
    
    var swiper = new Swiper(".benefits-inner", {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    })
}

export const serviceSlider = () => {

    var swiper = new Swiper(".row", {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
        
    })
}