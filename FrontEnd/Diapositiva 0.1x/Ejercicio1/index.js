//-----------------------------------------------------------------------------
// Seleccionamos el contenedor donde queremos agregar los elementos
const container = document.querySelector('section');
const addPicture = document.querySelector('button');
//-----------------------------------------------------------------------------
addPicture.addEventListener("click", () => {
    // Obtengo los inputs del DOM
    const fields = document.querySelectorAll("input");
    let data = {
        title: fields[0].value,
        url: fields[1].value,
        paragraph: document.querySelector("textarea").value
    }

    // Creo los elementos HTML
    const div = document.createElement('div');
    const title = document.createElement('p');
    const img = document.createElement('img');
    const picture = document.createElement('picture');
    const paragraph = document.createElement('p');

    // Configuro los atributos y contenido de los elementos
    title.textContent = data.title;
    img.src = data.url;
    img.alt = 'Foto de ' + data.title;
    paragraph.textContent = data.paragraph;

    // Agrego los elementos al div
    div.appendChild(title);
    picture.appendChild(img);
    div.appendChild(picture);
    div.appendChild(paragraph);
    div.setAttribute("class", "cards");


    // Agrego el div al DOM
    container.appendChild(div);
})
//-----------------------------------------------------------------------------
container.addEventListener("click", (e) => handleClick(e));

function handleClick(e) {
    // if (e.target.parentElement.localName==="section")
    console.log(e.target.parentElement.localName);
    // console.log(e.target.parentElement);
    // console.log(e.target.id);
    hiddeDiv(e.target)
    // if (e.target == "div")
    //     e.target.hidden=true

    // e.target.classList.contains("hidden")
    // else
    // e.target.parentElement

    // this.visible = true
}
//-----------------------------------------------------------------------------
function hiddeDiv(element) {
    if (element.localName === "div")
        element.hidden = true;
        // element.setAttribute("class","hidden")
    else
        hiddeDiv(element.parentElement)
}
//-----------------------------------------------------------------------------
function showAll() {
    const allDivs = document.getElementsByClassName("aaa");
    allDivs.forEach(div => { div.hidden = false });
}