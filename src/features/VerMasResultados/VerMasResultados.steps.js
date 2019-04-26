const modulo = require('./VerMasResultados.module')
const login = require('./../../pages/Login/Login.module')
let wait = {
  retries: 2,
  minTimeout: 5000
};

const I = actor();
// Add in your custom step files

Given('Ingreso el {string}  mi {string} y mi {string}', async function (Pais, Usuario, Password) {
  login.Constructor(); 
  login.InicioSesion(Pais, Usuario, Password)
});

When('Ingreso la palabra {string} en el buscador', async function (Producto) {
  this.Producto=Producto;
  modulo.BuscarProducto(Producto);

});

Then('presionar el botón "Ver más resultados" y observar todas las ofertas', async function () {
  await modulo.ValidarBotonVerMasResultados(this.Producto);
  //login.CerrarSesion();
});