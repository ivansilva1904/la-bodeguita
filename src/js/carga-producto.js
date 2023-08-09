const { invoke } = window.__TAURI__.tauri;
//Aparentemente necesitas un archivo de js por cada pagina de html

const botonProd = document.querySelector('#botonProducto');
botonProd.addEventListener('click', () =>{
  var nombre = document.getElementById('producto-nombre').value;
  invoke('guardar_producto', { nombre });
});

async function recibirProductos(){
  invoke('mostrar_productos')
    .then((productos) => {
      let seccion = document.getElementById('impresion-productos')
      seccion.innerHTML = JSON.stringify(productos)
    })
}