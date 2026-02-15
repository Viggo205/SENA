const botonHamburguesa = document.getElementById('boton-hamburguesa');
        const menuPrincipal = document.getElementById('menu-principal');

        botonHamburguesa.addEventListener('click', () => {

            menuPrincipal.classList.toggle('menu-activo');

            menuPrincipal.classList.toggle('hidden');
        });
