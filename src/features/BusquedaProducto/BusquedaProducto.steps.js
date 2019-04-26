const modulo = require('./BusquedaProducto.module')
const login = require('./../../pages/Login/Login.module')
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
// Add in your custom step files

Given('Ingreso el {string}  mi {string} y mi {string}', async function (Pais, Usuario, Password) {
    this.Pais=Pais;
    this.Usuario=Usuario;
    this.Password=Password;
    login.SeleccionarPaisConfig(this.Pais);
    modulo.SeleccionarPaisConfig(this.Pais);
    login.InicioSesion( this.Pais,this.Usuario,this.Password)
  });

When('Ingreso la palabra {string} en el buscador', async function(Producto){
    modulo.BuscarProducto(Producto);
    
  });

Then('mostrara una lista de productos con el botón "Agregar" activado', function(){
    modulo.ValidarBotonAgregalo();
    login.CerrarSesion();
  });

