// Variables 
const $form = document.querySelector('#form');
const submit = document.querySelector('#submit');

// Event listener 
$form.addEventListener('submit', handleSubmit);

// Funcion general
async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })

    if(response.ok) {
        $form.reset();
        const notificacion = new Notificacion({
            mensaje: 'Your message has been sent and I will be in touch with you soon.'
        })
        notificacion.mostrar();
        return;
    }
}

// Funcion de notificacion 
class Notificacion {
    constructor({mensaje}) {
        this.mensaje = mensaje;
    }

    mostrar() {
        // Crea alerta
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta');

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alerta');
        alertaPrevia?.remove();

        // Mensaje de exito
        alerta.textContent = this.mensaje;
        
        // Insertarlo en el DOM
        $form.insertBefore(alerta, submit);

        console.log($form.insertBefore(alerta, submit))

        // Quitar despues de 5s
        setTimeout(()=>{
            alerta.remove();
        }, 5000);
    }
}