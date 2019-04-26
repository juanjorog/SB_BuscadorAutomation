config = {
    locator: {
        fieldBuscarProducto:{id:"CampoBuscadorProductos"},
        clickIngresaFacebook:{id:"btnLoginFB"},
        clickOlvidasteContrasena: {id:"loginanterior"},
        selectResultadoBusqueda: {id:  'ResultadoBuscador'},
        listaResultado: {class:'.resultado_busqueda_producto'},
        selectResultadoBusquedaItem: (row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]` },
        selectResultadoBusquedaItem1:(row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]/div[3]/div[1]`},
        clickAgregarItemXpath:       (row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]/div[3]/div[2]/a`},
        clickAgregarItem: {class: '.resultado_busqueda_btn_agregar_wrapper'}, 
        clickElegirItem: {class: '.resultado_busqueda_btn_elegir_opcion_wrapper'},
        clickCantidadItem:{class:'.resultado_busqueda_cantidad_prod'}

    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;