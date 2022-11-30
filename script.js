let email = document.querySelector('.navbar-email');
const cuentaOrdenes = document.querySelector('.desktop-menu');

email.addEventListener('click', toogleCuentaOrdenes);

function toogleCuentaOrdenes(){
    cuentaOrdenes.classList.toggle('inactive');
} 