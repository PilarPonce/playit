window.addEventListener("load", function() {

  /* Header */

  document.getElementById('user2').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'
  })

  document.getElementById('user2').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'
  })

  document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'
  })


  document.getElementById('hamburguer').addEventListener('click', function(){
    document.getElementById('hamburguer').style.display = 'none'
    document.querySelector('.responsivo').style.display = 'flex'
  })

  document.querySelector('.cerrar').addEventListener('click', function(){
    document.querySelector('.responsivo').style.display = 'none'
    document.getElementById('hamburguer').style.display = 'flex'
  })

  /* Header */

  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var idPelicula = queryString.get("idPelicula")

  console.log(idPelicula);



  fetch("https://api.themoviedb.org/3/movie/ "+ idPelicula +" ?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
.then(function(pelicula){
console.log(pelicula);
document.querySelector("h1").innerHTML = pelicula.title
document.querySelector('.fecha').innerHTML = pelicula.release_date
document.querySelector('.sipnopsis').innerHTML= pelicula.overview
document.querySelector(".lenguaje").innerHTML= pelicula. original_language
})





    //  var urlImg = "https://image.tmdb.org/t/p/original"
    //  document.querySelector(".posterPeli").innerHTML = "<img src='"+ urlImg + pelicula.poster_path+ "'style='width:300px;'>"";
