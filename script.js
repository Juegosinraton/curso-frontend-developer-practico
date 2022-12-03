let email = document.querySelector('.navbar-email');
const cuentaOrdenes = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.carrito');
const itemsCarro = document.querySelector('.product-detail');
const contenedorProductos = document.querySelector('.cards-container')
const detalleProducto = document.querySelector('.product-detailC')
const textoUno = document.querySelector('.primerTexto');
const textoDos = document.querySelector('.segundoTexto');
const textoTres =  document.querySelector('.tercerTexto')
const productos = [
    {name: 'pantalla', price: 220, image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name: 'bike', price:170, image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name: 'Computadora', price: 240, image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
];

email.addEventListener('click', toggleCuentaOrdenes);
menuHam.addEventListener('click', toggleMenuHam);
carrito.addEventListener('click', toggleCarrito);

function toggleCuentaOrdenes(){
    cuentaOrdenes.classList.toggle('inactive');
    if(!cuentaOrdenes.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        itemsCarro.classList.add('inactive');
        detalleProducto.classList.add('inactive');
    }
} 

function toggleMenuHam(){
    mobileMenu.classList.toggle('inactive');
    if(!mobileMenu.classList.contains('inactive')){
        itemsCarro.classList.add('inactive');
        cuentaOrdenes.classList.add('inactive');
        detalleProducto.classList.add('inactive');
    }
}

function toggleCarrito(){
    itemsCarro.classList.toggle('inactive');
    if(!itemsCarro.classList.contains('inactive')){
        cuentaOrdenes.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        detalleProducto.classList.add('inactive');
    }
}

    for(var producto of productos){
      const imgCar = document.createElement('img');
      imgCar.setAttribute('src', './icons/bt_add_to_cart.svg')

      const contImage = document.createElement('figure');
      contImage.append(imgCar);

      const objeto = document.createElement('p');
      objeto.innerHTML = producto.name;

      const precios = document.createElement('p');
      precios.innerText = '$' + producto.price;

      const letraProducto = document.createElement('div');
      letraProducto.append(precios, objeto);

      const imagenProducto = document.createElement('img');
      imagenProducto.setAttribute('src', producto.image);

      const infoProducto = document.createElement('div');
      infoProducto.classList.add('product-info');
      infoProducto.append(letraProducto, contImage, contImage);

      const contenedorCards = document.createElement('div');
      contenedorCards.classList.add('product-card');
      contenedorCards.append(imagenProducto, infoProducto);
      imagenProducto.addEventListener('click', asideProducto);

      contenedorProductos.append(contenedorCards);
      
    }

function asideProducto(){
    detalleProducto.classList.toggle('inactive');
    if (!detalleProducto.classList.contains('inactive')){
        cuentaOrdenes.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        itemsCarro.classList.add('inactive');
    }
}