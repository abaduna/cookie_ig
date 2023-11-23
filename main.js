// var lasCookies = document.cookie;

var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var ano = fecha.getFullYear();
var fechacompleta = dia+"/"+mes+"/"+ano;
var objetivo = document.getElementById('texto_nav1');
objetivo.innerHTML = fechacompleta;
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
  