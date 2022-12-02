let email = document.querySelector('.navbar-email');
const cuentaOrdenes = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.carrito');
const itemsCarro = document.querySelector('.product-detail');
const contenedorProductos = document.querySelector('.cards-container')
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

/*
      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> 
 
*/

function agregarProducto(arr){
    for(var producto of arr){
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

      contenedorProductos.append(contenedorCards);
    }
}

agregarProducto(productos);