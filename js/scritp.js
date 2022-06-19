// NAVBAR
const navBar = document.querySelector('#nav');
const linksNavBar = ['Nostros', 'Actividades', 'Donde estmos', 'Contacto'];


linksNavBar.forEach(links => {
    navBar.innerHTML += `
        <li class="nav-item">
            <a class="nav-link" href="#">${links}</a>
        </li>`
});

const menuToggle = document.querySelector('.nav_toggle');

menuToggle.addEventListener('click', () => {
    console.log("click");
});

// ACTIVIDADES
const actividades = document.querySelector('#actividades');

class Actividades {
    constructor(img, titulo, descripcion) {
        this.img = img;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}

const canyoning = new Actividades('img/canyoning.jpg', 'Canyoning', 'Descripcion canyoning');
const torrentismo = new Actividades('img/torrentismo.jpg', 'Torrentismo', 'Descripcion torrentismo');
const senderismo = new Actividades('img/senderismo.jpg', 'Senderismo', 'Descripcion senderismo');
const birdwatching = new Actividades('img/birdwatching.jpg', 'Birdwatching', 'Descripcion birdwatching');
const meditacions = new Actividades('img/meditacion.jpg', 'Meditacion', 'Descripcion meditacion');
const yoga = new Actividades('img/yoga.jpg', 'Yoga', 'Descripcion yoga');
const arborismo = new Actividades('img/arborismo.jpg', 'Arborismo', 'Descripcion arborismo');
const camping = new Actividades('img/camping.jpg', 'Camping', 'Descripcion camping');

const actividadesArray = [canyoning, torrentismo, senderismo, birdwatching, meditacions, yoga, arborismo, camping];

actividadesArray.forEach(actividad => {
    actividades.innerHTML += `
        <div><h5>${actividad.titulo}</h5></div>
    `
})
