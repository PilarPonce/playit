window.addEventListener('load' ,function(){

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


})
