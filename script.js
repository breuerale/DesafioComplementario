//Desafio Provincias Argentinas


let provincias, pais
do{
    provincias = parseInt(prompt("Ingrese la cantidad de paises que limitan con Argentina"))
    pais = prompt("Ingrese un pais limitrofe").toLowerCase()
}

while(provincias != 5) //El ciclo se va ejecutar cuando el usuario no ingrese 5.Cuando la condicion sea False(5) el ciclo se deja de ejecutar y se muestra en pantalla 'correcto'.
alert("Correcto")

switch(pais) {
    case "uruguay":
        alert("Es limitrofe")
        break;
    case "paraguay":
        alert("Es limitrofe")
        break;
    case "brasil":
        alert("Es limitrofe")
        break;
    case "chile":
        alert("Es limitrofe")
        break;
    case "bolivia":
        alert("Es limitrofe")
        break;
    default:
        alert("No es limitrofe")
}