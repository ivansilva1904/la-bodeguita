const { invoke } = window.__TAURI__.tauri;

const boton1 = document.querySelector('#boton1');
boton1.addEventListener('click', () => {
  alert('hola')
})

//Asi se envian parametros al backend
const boton2 = document.querySelector('#boton2');
boton2.addEventListener('click', () => {
  let nose = 2;
  invoke('hola', { parametro: nose });
})

const boton3 = document.querySelector('#boton3');
boton3.addEventListener('click', () => {
  invoke('abrir_vista2')
})
