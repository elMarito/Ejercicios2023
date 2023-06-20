//-----------------------------------------------------------------------------
// Seleccionamos el contenedor donde queremos agregar los elementos
const container = document.getElementById('bomb');
//-----------------------------------------------------------------------------
let counter = 10;
let countDown = setInterval(() => {
    // addDiv();
    const div = document.createElement('div');
    div.setAttribute("class", "countDown");
    container.appendChild(div);
    if (counter-- === 0) {
        clearInterval(countDown)
        // delete divs
        // removeDivs();
        const divs = document.querySelectorAll("div");
        divs.forEach(div => div.remove())
        // add img
        const img = document.createElement('img');
        img.src = "https://c8.alamy.com/compes/ke1jxa/bomba-de-tiempo-ilustracion-sobre-fondo-blanco-ke1jxa.jpg";
        img.alt = 'Foto de una Bomba';
        container.appendChild(img);
    }
}, 1000);

//-----------------------------------------------------------------------------
function addDiv() {
    const div = document.createElement('div');
    div.setAttribute("class", "countDown");
    container.appendChild(div);
}
//-----------------------------------------------------------------------------
function removeDivs() {
    const divs = document.querySelectorAll("div");
    divs.forEach(div => div.remove())
}