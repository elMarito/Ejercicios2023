let container = document.querySelector("#container");

// fetch("https://reqres.in/api/users?page=2")
fetch("https://randomuser.me/api/?results=100&inc=gender,name,location,picture,nat")
    .then(
        response => response.json()
    )
    .then(
        datos => {
            // datos.data.forEach(persona => {
            datos.results.forEach(persona => {
                container.innerHTML += `<div class="${persona.gender}">
                <img src="${persona.picture.medium}" alt="">
                <span><h4>${persona.name.first} ${persona.name.last}</h4>                
            <p><span><img src="https://flagsapi.com/${persona.nat}/flat/32.png"></span> ${persona.location.country}</p></span>
        </div>
            `
            })
        }
    )
    .catch(
        error => {
            console.log("Error de conexion " + error)
        }
    )
//-----------------------------------------------------------------------------
