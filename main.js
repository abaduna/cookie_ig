// var lasCookies = document.cookie;


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
  