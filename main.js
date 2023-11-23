// var lasCookies = document.cookie;




console.log(localStorage_ig);
localStorage.setItem("miGato", "Juan");
let mostrarEnPantalla = localStorage.getItem("miGato");

let mostrarEnPantalla_id = localStorage.getItem("miGato");

var cantidadElementos = localStorage.length;

for (var i = 0; i < cantidadElementos; i++) {
    var clave = localStorage.key(i);
    var valor = localStorage.getItem(clave);

    let localStorage_text = "Clave: " + clave + ", Valor: " + valor
    alert(localStorage_text)
    document.getElementById("localSorague_cookie").innerHTML=localStorage_text;
    
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

var todasLasCookies = getCookies();
console.log(todasLasCookies);

document.getElementById("localSorague_cookie_v2").innerHTML=todasLasCookies;
function leerCookie(nombre_cookie) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(nombre_cookie + "=")) {
          console.log(cookies[i]);
          var str=cookies[i] 
        break;
      }
    }
  }
  document.getElementById("h2_title").innerHTML=str;
  document.getElementById("p_cookies").innerHTML=cookies;
  