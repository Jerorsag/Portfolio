const abrirModal = document.querySelector('.mas-proyectos');
const modal = document.querySelector('.modal-mas-proyectos');
const cerrarModal = document.querySelector('.cerrar');

abrirModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
})

cerrarModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('show');
})

window.addEventListener('click', (e) => {
    e.preventDefault;
    if(e.target == modal) {
        modal.classList.remove('show')
    }
})