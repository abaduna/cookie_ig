// var lasCookies = document.cookie;

var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var ano = fecha.getFullYear();
var fechacompleta = dia+"/"+mes+"/"+ano;
var objetivo = document.getElementById('texto_nav1');
objetivo.innerHTML = fechacompleta;
let localStorage_ig = Window.localStorage
console.log(localStorage_ig);
localStorage.setItem("miGato", "Juan");
let mostrarEnPantalla = localStorage.getItem("miGato");
console.log(mostrarEnPantalla);
let mostrarEnPantalla_id = localStorage.getItem("miGato");

var cantidadElementos = localStorage.length;

for (var i = 0; i < cantidadElementos; i++) {
    var clave = localStorage.key(i);
    var valor = localStorage.getItem(clave);

    let localStorage_text = "Clave: " + clave + ", Valor: " + valor
    alert(localStorage_text)
}





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
  