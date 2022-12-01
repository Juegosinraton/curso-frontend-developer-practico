let email = document.querySelector('.navbar-email');
const cuentaOrdenes = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');

email.addEventListener('click', toggleCuentaOrdenes);
menuHam.addEventListener('click', toggleMenuHam);

function toggleCuentaOrdenes(){
    cuentaOrdenes.classList.toggle('inactive');
} 
function toggleMenuHam(){
    mobileMenu.classList.toggle('inactive');
}