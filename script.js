document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.menu-toggler');
    const menuList = document.querySelector('.menu__list');

    toggler.addEventListener('click', function() {
        menuList.classList.toggle('show');
    });
});

function toggleMenu() {
    const menuList = document.querySelector('.menu__list');
    menuList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        // Crea un objeto FormData con los datos del formulario
        const formData = new FormData(form);

        // Envía los datos usando fetch
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Si el envío es exitoso, limpia los campos del formulario
                form.reset();
                alert('Mensaje enviado exitosamente!');
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
                    }
                })
            }
        }).catch(error => {
            alert('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
        });
    });
});