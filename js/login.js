window.addEventListener('load' ,function(){

var form = document.querySelector('#formlogin')

form.addEventListener('submit', function(e){

e.preventDefault()

var nombre = document.querySelector('#name')

var email = document.querySelector('#email')

var genero = document.querySelector('#genero')


console.log(nombre.value);
console.log(email.value);
console.log(genero.selectedIndex);

//validar que vengan datos
if (nombre.value == "") {
  UIkit.notification({
      message: 'Insert your name',
      status: 'danger',
      pos: 'top-center',
      timeout: 3000
  });
}else if (email.value == "") {
  UIkit.notification({
      message: 'Insert your mail',
      status: 'warning',
      pos: 'top-center',
      timeout: 3000
  });
}else {
  // escribir los datos en el local storage
localStorage.setItem('usuario', nombre.value)
document.querySelector('#user2 i').style.display = 'none'
document.querySelector('#user2 p').style.display = 'flex'
document.querySelector('#user2 p').innerHTML = 'Hola ' + nombre.value
document.querySelector('#favorite').style.display = 'flex'
}

if (localStorage.getItem('usuario') != null) { // Mostrar las cosas

}







})


})
