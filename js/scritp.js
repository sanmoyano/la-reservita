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

const canyoning = new Actividades('https://images.unsplash.com/photo-1532443603613-61fa154742cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', 'Canyoning', 'Descripcion canyoning');
const torrentismo = new Actividades('https://images.unsplash.com/photo-1539617546058-a8f9510b464e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Torrentismo', 'Descripcion torrentismo');
const senderismo = new Actividades('https://images.unsplash.com/photo-1532443603613-61fa154742cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', 'Senderismo', 'Descripcion senderismo');
const birdwatching = new Actividades('https://images.unsplash.com/photo-1539617546058-a8f9510b464e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Birdwatching', 'Descripcion birdwatching');
const meditacions = new Actividades('https://images.unsplash.com/photo-1532443603613-61fa154742cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', 'Meditacion', 'Descripcion meditacion');
const yoga = new Actividades('https://images.unsplash.com/photo-1539617546058-a8f9510b464e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Yoga', 'Descripcion yoga');
const arborismo = new Actividades('https://images.unsplash.com/photo-1532443603613-61fa154742cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', 'Arborismo', 'Descripcion arborismo');
const camping = new Actividades('https://images.unsplash.com/photo-1539617546058-a8f9510b464e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Camping', 'Descripcion camping');

const actividadesArray = [canyoning, torrentismo, senderismo, birdwatching, meditacions, yoga, arborismo, camping];

actividadesArray.forEach(actividad => {
    actividades.innerHTML += `
        <div class="card stacked">
            <img class="card_img" src="${actividad.img}" alt="${actividad.titulo}">
            <div class="card_contenido">
                <h2 class="card_title">${actividad.titulo}</h2>
                <p class="card_text">${actividad.descripcion}</p>
            </div>
        </div>`

})
