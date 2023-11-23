// var lasCookies = document.cookie;


function leerCookie(nombre_cookie) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(nombre_cookie + "=")) {
          console.log(cookies[i]);
          alert(ds_user_id)
        break;
      }
    }
  }
  alert( document.cookie )
  leerCookie(ds_user_id)