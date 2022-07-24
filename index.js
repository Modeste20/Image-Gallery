

const grid_images = document.querySelectorAll('.gallery .grid-container .grid-items img')

for(const i of grid_images){
    console.log(i)
    i.addEventListener('click',() => {
        document.body.classList.add('modal-open')
        const modal_image = document.querySelector('.modal .modal-content img');
        modal_image.setAttribute('src',i.getAttribute('src'))
        modal_image.setAttribute('alt',i.getAttribute('alt'))
    })
}

const close_modal_button = document.querySelector('.modal .modal-close')

if(close_modal_button){
    close_modal_button.addEventListener('click',() => {
        if(document.body.classList.contains('modal-open')){
            document.body.classList.remove('modal-open')
        }
    })
}