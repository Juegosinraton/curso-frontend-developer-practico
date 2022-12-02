let email = document.querySelector('.navbar-email');
const cuentaOrdenes = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.carrito');
const itemsCarro = document.querySelector('.product-detail');

email.addEventListener('click', toggleCuentaOrdenes);
menuHam.addEventListener('click', toggleMenuHam);
carrito.addEventListener('click', toggleCarrito);

function toggleCuentaOrdenes(){
    cuentaOrdenes.classList.toggle('inactive');
    if(!cuentaOrdenes.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        itemsCarro.classList.add('inactive');
    }
} 

function toggleMenuHam(){
    mobileMenu.classList.toggle('inactive');
    if(!mobileMenu.classList.contains('inactive')){
        itemsCarro.classList.add('inactive');
        cuentaOrdenes.classList.add('inactive');
    }
}

function toggleCarrito(){
    itemsCarro.classList.toggle('inactive');
    if(!itemsCarro.classList.contains('inactive')){
        cuentaOrdenes.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
}