
  config = {
    locator: {
        fieldBuscarProducto:{id:"CampoBuscadorProductos"},
        clickIngresaFacebook:{id:"btnLoginFB"},
        clickOlvidasteContrasena: {id:"loginanterior"},
        selectResultadoBusqueda: {id:  'ResultadoBuscador'},
        clickVerMasResultados:'//*[@id="BotonVerTodosResultados"]',
        listaResultado: {class:'.resultado_busqueda_producto'},
        selectResultadoBusquedaItem: (row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]` },
        selectResultadoBusquedaItem1:(row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]/div[3]/div[1]`},
        clickAgregarItemXpath:       (row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]/div[3]/div[2]/a`},
        clickAgregarItem: {class: '.resultado_busqueda_btn_agregar_wrapper'}, 
        clickElegirItem: {class: '.resultado_busqueda_btn_elegir_opcion_wrapper'},
        clickCantidadItem:{class:'.resultado_busqueda_cantidad_prod'},
        selectFiltroPrecios:{xpath:'/html/body/div[2]/div/main/section[1]/div/ul/li[3]/ul'},
        clickPrimertFiltroPrecio:{xpath:'/html/body/div[2]/div/main/section[1]/div/ul/li[3]/ul/li[1]'},
        selectFichaProductoBuscador: {id:'FichasProductosBuscador'},
        listFichaProductoBuscador:{class: '.ficha__producto'},
        selectResultadoBusquedaItem:(row) => { return `//*[@id="FichasProductosBuscador"]/article[${row}]` },
        selectResultadoBusquedaPrecioItem:(row) => { return `//*[@id="FichasProductosBuscador"]/article[${row}]/div/div[2]/div[2]`}

    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;