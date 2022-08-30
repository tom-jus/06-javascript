
const lista_super = [
    "Pollo",
    "Huevo",
    "Espinaca",
    "Avena",
    "Leche descremada",
]

lista_super.splice(5, 0, "Aceite de girasol")
lista_super.splice(5, 1)

const peli_fav = [
    {titulo: "Forrest Gump", director: "Robert Zemeckis" , fecha: 1994 },
    {titulo: "Never Back Down", director: "Jeff Wadlow", fecha: 2008 },
    {titulo: "Avengers: End Game", director: "Anthony Russo, Joe Russo", fecha: 2019}
]
// Filtrar solo fechas de peliculas mayores o iguales a 2010
const new_peli_fav = peli_fav.filter(obj => obj.fecha >= 2010)

// Lista que contenga los directores de la lista de películas original (utilizando map)
function direc({ director }) {
    return `${director}`;
}
const director = peli_fav.map(direc);
console.log(director);

// Lista que contenga los títulos de la lista de películas original (utilizando map)
function nombre({ titulo }) {
    return `${titulo}`;
}
const titulos = peli_fav.map(nombre);
console.log(titulos);

// Lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(director.concat(titulos))

// Lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const director_titulos = [...director, ...titulos]