const URL_API = `https://647684449233e82dd53a14ea.mockapi.io/Alumnos`;
let cachePerson; // = {};
let cacheData = [];

const addButton = document.getElementById("add");
const tbody = document.querySelector("tbody");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const delButton = document.getElementById("delete");
const closeModal = document.getElementById("closeModal");
loadAPI();

function loadAPI() {
    fetch(URL_API)
        .then(response => response.json())
        .then(data => {
            cacheData = data;
            renderTable(tbody, data);
        })
        .catch(
            error => {
                console.error('Error al cargar el archivo JSON:', error);
                alert(`Imposible recuperar fuente de datos, ${error}`);

            }
        )
}
//-----------------------------------------------------------------------------
tbody.addEventListener("click", (e) => handleRowClick(e));
function handleRowClick(e) {
    if (e.target.id === "") return/* para evitar el encabezado */
    const ID = getID(e.target);

    //RECUPERA DATOS DEL ID 
    // const person = buscarDato(ID).then();
    buscarDato(ID).then(data => {
        // person.action = updatePerson;
        // console.log(person);
        // loadModal(person);
    }
    );
}
//-----------------------------------------------------------------------------
/**function auxiliar */
function getID(elem) {
    return ((elem.localName === "tr") ? elem.id : getID(elem.parentElement))
}
//-----------------------------------------------------------------------------
function buscarDato(idDato) {
    fetch(`${URL_API}/${idDato}`)
        .then(response => response.json())
        .then(data => {
            // datoParaFormulario = data;
            cachePerson = data;
            loadModal(data);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            alert(`Error al buscar el dato, ${error}`);
        });
}
//-----------------------------------------------------------------------------
function updatePerson(person) {
    fetch(`${URL_API}/${person.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
    })
        .then(response => response.json())
        .then(data => {
            // console.log(`Editado ${data.id}`);
            alert(`Editado id: ${data.id}`);
            loadAPI();
        })
        .catch(error => {
            // console.error(`Error Editado ${data.id}`, error);
            alert(`Error Editado el elemento, ${error}`);
        });
}
//-----------------------------------------------------------------------------
function createPerson(data) {
    fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // console.log("Elemento creado:", data);
            alert(`Elemento creado: ${data}`);
            loadAPI();
        })
        .catch(error => {
            // console.error(`Error creando el elemento`, error);
            alert(`Error creando el elemento, ${error}`);
        });
}
//-----------------------------------------------------------------------------
//************************************************************************** */
//************************************************************************** */
addButton.addEventListener("click", (e) => {
    //clearForm
    loadModal({ id: "", name: "", email: "", avatar: "", createdAt: "" }, false);
    // loadModal({ id: "", name: "", email: "", avatar: "", createdAt: "", action: createPerson }, false);
})
//-----------------------------------------------------------------------------
form.addEventListener("submit", (e) => {
    // e.preventDefault();

    // const user = new FormData(form);
    // const person = getDataFromForm();
    cachePerson = getDataFromForm();

    console.log({ cachePerson });
    if (cachePerson.id === "")
        createPerson(cachePerson)
    else
        updatePerson(cachePerson);

    // modal.close()// <- se cierra solo con el submit
})
/**function auxiliar */
function getDataFromForm() {
    return {
        createdAt: new Date().toISOString(),
        name: form[1].value,
        avatar: form[3].value,
        email: form[2].value,
        id: form[0].value
    }
}
//-----------------------------------------------------------------------------
// document.getElementById("delete").addEventListener("click", (e) => {
delButton.addEventListener("click", (e) => {
    // cacheData = cacheData.filter((elem) => elem.id !== cachePerson.id)
    // renderTable(tbody, cacheData)

    // const idPerson = cachePerson.id;

    fetch(`${URL_API}/${cachePerson.id}`, { method: "DELETE", })
        .then(response => response.json())
        .then(data => {
            // console.log(`Eliminado id: ${cachePerson.id}`);
            alert(`Eliminado id: ${cachePerson.id}`);
            loadAPI();
        })
        .catch(error => {
            // console.error('Error al eliminar el dato:', error);
            alert(`Error al eliminar el dato, ${error}`);
        });
    modal.close()
})
//-----------------------------------------------------------------------------
closeModal.addEventListener("click", () => { modal.close() })
//-----------------------------------------------------------------------------
// searchBar.addEventListener("input", e => {
//     const searchInProgress = users.filter(elem =>
//         elem.name.toLowerCase().starsWith(e.target.value.toLowerCase())
//     );
//     removeChildren(tbody);
// tbody.replaceChildren();
//     renderTable(tbody, searchInProgress);
// };

// colName.addEventListener("click", e => {
// tbody.replaceChildren();
//     removeChildren(tbody);
//     renderTable(tbody, sorted.reverse());
// });
//-----------------------------------------------------------------------------
//************************************************************************** */
// function removeChildren(elem) {
//     tbody.replaceChildren();
// }

function renderTable(container, dataFromApi) {
    container.replaceChildren(); // borra los datos anteriores en caso de recargar.
    dataFromApi.forEach(person => {
        //-----------------------------------------------------------------------------
        // container.innerHTML += `<tr id="${person.id}">
        //                         <td scope="row"><img src="${person.avatar}" alt="persona.name"></td>
        //                         <td>${person.id}</td>
        //                         <td>${person.name}</td>
        //                         <td>${person.email}</td>
        //                         <td>${person.createdAt}</td>
        //                         </tr>`
        //-----------------------------------------------------------------------------
        let row = document.createElement('tr');
        row.id = person.id;
        let cells = Array.from({ length: 5 }).map(() => { return document.createElement('td') });

        // row.append(...Array.from({ length: 5 }).map(() => { return document.createElement('td') }));
        // row.children[0].appendChild(img);
        // row.children[1].innerText = person.id;
        // row.children[2].innerText = person.name;
        // row.children[3].innerText = person.email;
        // row.children[4].innerText = person.createdAt;
        let img = document.createElement('img'); img.src = person.avatar;
        cells[0].appendChild(img);     // row.appendChild(cells[0]);
        cells[1].innerText = person.id;
        cells[2].innerText = person.name;
        cells[3].innerText = person.email;
        cells[4].innerText = person.createdAt;
        row.append(...cells);

        container.appendChild(row);
    })
}
//-----------------------------------------------------------------------------
/**function auxiliar */
function loadModal(person, isNew = false) {
    const inputs = document.getElementsByTagName("input");

    inputs[0].value = person.id;
    inputs[1].value = person.name;
    inputs[2].value = person.email;
    inputs[3].value = person.avatar;
    // inputs[  ].value = person.createdAt;
    inputs[5].hidden = isNew;
    // element.setAttribute("class","hidden")


    // const user = new FormData(form);
    // const formData = new FormData(form);
    // const description: = formData.get("description")?.toString()!;
    // formData.set("id", person.id);
    // formData.set("name", person.name);
    // formData.set("email", person.email);
    // formData.set("avatar", person.avatar);
    // formData.set("createdAt", person.createdAt);
    modal.showModal();
}
//-----------------------------------------------------------------------------
// function crearCelda(clase, dato) {
//     const celda = document.createElement("td");
//     celda.classList.add(clase);
//     celda.textContent = dato;
//     return celda;
// }
// function crearLista(data, visorLista) {

//     // for (let i=0; i<data.length; i++){
//     //     crearFila("fila",data[i],visorLista);
//     // }
// }

//*********************
// function orderByName() {
//     fetch(`${URL_API}/${id}`)
//         .then(response => response.json())
//         .then(localData => {
//             users = localData.toSorted((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
//                 .reverse();
//             // loading.classList.togle("hide");
//             renderTable(tbody, users);
//             // render(tbody, sorted.reverse());
//             // render(tbody, dataFromApi.reverse());
//         }
//         ).catch(err => console.erro(err));
// }