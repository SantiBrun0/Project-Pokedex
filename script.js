const screen = document.querySelector(".screen")
const info = document.querySelector(".info")
const inputPokemon = document.querySelector(".inputPokemon")
const btnBuscar = document.querySelector(".btnBuscar")


const obtenerPokemon = (name) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (data) {

            console.log(data);
            
            const renderizarPokemon = (pokemon) => {

                let sprite = document.createElement('img')
                sprite.src = pokemon.sprites.other.home.front_default
                sprite.classList.add("imgPokemon")
            
                screen.appendChild(sprite)

                let nombre = document.createElement('p')
                nombre.innerHTML = `<b>NOMBRE:</b> ${pokemon.name}`

                let id = document.createElement('p')
                id.innerHTML = `<b>ID:</b> ${pokemon.id.toString().padStart(3, 0)}`

                let tipo = document.createElement('p')
                tipo.innerHTML = `<b>TIPO:</b> ${pokemon.types[0].type.name}`

                let peso = document.createElement('p')
                peso.innerHTML = `<b>PESO:</b> ${pokemon.weight}`

                let hp = document.createElement('p')
                hp.innerHTML = `<b>HP:</b> ${pokemon.stats[0].base_stat}`

                let ataque = document.createElement('p')
                ataque.innerHTML = `<b>ATAQUE:</b> ${pokemon.stats[1].base_stat}`

                let defensa = document.createElement('p')
                defensa.innerHTML = `<b>DEFENSA:</b> ${pokemon.stats[2].base_stat}`


                info.appendChild(nombre)
                info.appendChild(id)
                info.appendChild(tipo)
                info.appendChild(peso)
                info.appendChild(hp)
                info.appendChild(ataque)
                info.appendChild(defensa)
            
            }

            renderizarPokemon(data)

        })
}



btnBuscar.addEventListener('click', () => {
    screen.innerHTML = ' '
    info.innerHTML = ' '
    let pokemonBuscado = inputPokemon.value.toLowerCase().trim()
    obtenerPokemon(pokemonBuscado)
    inputPokemon.value = ''
})

