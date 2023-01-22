export const zoom = () => {
    const modal = document.getElementById('modalDoc')
    const imgs = document.querySelectorAll('.img-responsive')
    const modalImg = document.getElementById('img')
    const close = document.getElementById('close')
    const doc = document.querySelector('.sertificate-document')

    imgs.forEach((img) => {
        img.addEventListener('click', () => {
            modal.style.display = 'block'
            modalImg.src = doc.href
        })
        close.addEventListener('click', () => {
            modal.style.display = "none"
        })
        window.onscroll = function(){
            return false;
        }
    })        
}