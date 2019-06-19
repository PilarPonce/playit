window.addEventListener("load", function() {
  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var busqueda = queryString.get("busqueda")

  console.log(busqueda);

  document.querySelector("input").value = busqueda;

  fetch("https://api.themoviedb.org/3/search/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&query=" + busqueda + "&page=1&include_adult=false")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    console.log(datos);
        //guardo el array de pelis
    var arrayDePeliculas = datos.results
    var ul = document.querySelector('div ul')
    var li = ""
    //parte fija de la url de la imahen
    var urlImg = "https://image.tmdb.org/t/p/original/"
        // recorro el array de pelis
    for (var i = 0; i < arrayDePeliculas.length; i++) {
      li = "<li>"
      li += "<a href='detalle.html?idPelicula="+arrayDePeliculas[i].id+"'>"
      li += "<p>" + arrayDePeliculas[i].title + "</p>"
      li += "<img src = ' " + urlImg + arrayDePeliculas[i].poster_path + "' style='width:300px;'>"
      li += "</a>"
      li += "</li>"
      ul.innerHTML += li
    }
  })
  .catch(function(error){
  console.log("the error was: " + error)
  })

})
