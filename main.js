document.cookie = "nombre=oeschger";
document.cookie = "comida_preferida=tripa";

document.cookie = "nombre=arturo";
document.cookie = "dvlvkjvfjsdu=asado";
function alertCookie() {
  alert(document.cookie); // visualizar: nombre=oeschger;comida favorita=tripa
}

function getCookies() {
    var cookies = {};
    var cookiesArray = document.cookie.split(';');

    for (var i = 0; i < cookiesArray.length; i++) {
        var cookie = cookiesArray[i].trim();
        var cookieParts = cookie.split('=');
        var nombre = cookieParts[0];
        var valor = cookieParts[1];
        cookies[nombre] = valor;
    }

    return cookies;
}

let todasLasCookies = getCookies();
console.log(todasLasCookies);
var listaCookies = document.getElementById('listaCookies');

for (var nombreCookie in todasLasCookies) {
    var valorCookie = todasLasCookies[nombreCookie];
    var listItem = document.createElement('li');
    listItem.textContent = nombreCookie + ': ' + valorCookie;
    listaCookies.appendChild(listItem);
}
//localstorage_______________________________________________________________________________________________________________
var cantidadElementos = localStorage.length;
Total_localStorage = localStorage
var listaStorage = document.getElementById('listaStorage');
// Iterar a través de las claves y obtener los valores
for (var i = 0; i < cantidadElementos; i++) {
    var clave = localStorage.key(i);
    var valor = localStorage.getItem(clave);

    console.log("Clave: " + clave + ", Valor: " + valor);
    var listItem_st = document.createElement('li');
    listItem_st.textContent = clave + ': ' + valor;
    listaStorage.appendChild(listItem_st);
    // listaStorage
}
