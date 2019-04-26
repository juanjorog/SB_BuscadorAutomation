const I = actor();
let wait = {
    retries: 2,
    minTimeout: 2000
};
const utils = require('./../../utils/utils');
const config = require('./VerMasResultados.locator')
let locator = config.locator;

module.exports = {

    Constructor() {
        I.amOnPage('/');
        //this.locator=config.locator;
        //this.cfg=configJson;
    },


    BuscarProducto(Producto) {
        I.wait(1);
        I.retry(wait).fillField(locator.fieldBuscarProducto, Producto);
        I.wait(2);
        I.waitForElement(locator.selectResultadoBusqueda)
        I.retry(wait).dontSee('Ups… no tenemos ofertas con este nombre.');
        //I.retry(wait).click(locator.selectResultadoBusquedaItem(3));

    },

    async ValidarBotonVerMasResultados(Producto) {

        I.retry(wait).seeElement(locator.clickVerMasResultados);
        I.retry(wait).click(locator.clickVerMasResultados);
        I.retry(wait).seeInCurrentUrl('/BusquedaProductos?q='+Producto); 
        I.retry(wait).click(locator.clickPrimertFiltroPrecio);
        I.wait(5);
        let cantidadClase = await I.grabNumberOfVisibleElements(locator.listFichaProductoBuscador);
        console.log("numero de elementos ficha buscador:"+cantidadClase)

        for (let i = 1; i < cantidadClase + 1; i++) {
            //console.log("cantidadClase: => "+i);
            //let classItem = await I.grabAttributeFrom(locator.selectResultadoBusquedaPrecioItem(i), 'class');
            let classItem = await I.retry(wait).grabTextFrom(locator.selectResultadoBusquedaPrecioItem(i));
           
                console.log('El item ('+ i +') tiene el precio de: '+classItem)
                
        }

        I.retry(wait).saveScreenshot('PaginaVerMasResultados.png')

    }


}