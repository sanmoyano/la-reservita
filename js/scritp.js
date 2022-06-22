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

actividadesArray.forEach((actividad, indice) => {
    actividades.innerHTML += `
        <div class="card background stacked" id="card${indice + 1}" >
            <img class="card_img" src="${actividad.img}" alt="${actividad.titulo}">
            <div class="card_contenido">
                <h2 class="card_title">${actividad.titulo}</h2>
                <p class="card_text">${actividad.descripcion}</p>
            </div>
        </div>`

    const backgroundColor = document.querySelector(`#card${indice + 1}`);
    const colorChange = ["#F2D338", "#F2C641", "#F26A4B", "#F29999", "#F29999", "#F26A4B", "#F2C641", "#F2D338"]
    backgroundColor.style.backgroundColor = colorChange[indice];
})

const contacto = document.querySelector('#contacto');
contacto.innerHTML = `
    <form action="" method="POST">
        <div class="form_container">
            <div class="form_content">
                <input type="text" name="name" id="full-name" placeholder="Nombre" required="">
                <input type="email" name="email" placeholder="Correo electronico" required="@">
                <textarea  name="message""></textarea>
                <button type="submit">ENVIAR</button>
            </div>
        </div>
    </form>
`

const footer = document.querySelector('#footer');
footer.innerHTML = `
    <div class="footer_container">
        <div class="footer_content">
            <div class="redes">
                <p>Seguinos en nuestras redes</p>
                <a href="https://www.facebook.com/"><img src="img/facebook.png" alt="facebook"></a>
                <a href="https://www.instagram.com/"><img src="img/instagram.png" alt="instagram"></a>
            </div>
            <div class="titulos">
                <h1>La Reservita</h1>
                <p>Actividades de aventura y para el ser</p>
            </div>
        </div>
    </div>
`