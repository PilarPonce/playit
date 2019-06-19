window.addEvenListener("load", function() {
  alert("Hola como andas")
  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var idPelicula = queryString.get("idPelicula")

  console.log(idPelicula);



  fetch("https://api.themoviedb.org/3/movie/ "+ idPelicula +" ?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(pelicula) {
      console.log(pelicula);
      document.querySelector(".posterPeli").src = pelicula.poster_path;
      document.querySelector("h1").innerHTML = pelicula.title;
      document.querySelector(".fecha").innerHTML= pelicula.release_date;
      document.querySelector(".sipnopsis").innerHTML= pelicula.overview;
      document.querySelector(".lenguaje").innerHTML= pelicula. original_language;


    })
})
