const I = actor();
let wait = {
    retries: 2,
    minTimeout: 2000
};
const utils = require('./../../utils/utils');
const config = require('./BusquedaProducto.locator')
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

    async ValidarBotonAgregalo() {

        I.retry(wait).seeElement(locator.clickAgregarItem);
        let cantidadClase = await I.grabNumberOfVisibleElements(locator.listaResultado);
        //let cantidadAgregar= await I.grabNumberOfVisibleElements(locator.clickAgregarItem);
        let classItemCompare = locator.clickElegirItem.class + 'pl-0 pr-0 text-center'
        for (let i = 1; i < cantidadClase + 1; i++) {
            //console.log("cantidadClase: => "+i);
            let classItem = '.' + await I.grabAttributeFrom(locator.selectResultadoBusquedaItem1(i), 'class');
            if (classItem != classItemCompare) {
                //console.log(locator.clickAgregarItemXpath(i))
                I.retry(wait).scrollTo(locator.clickAgregarItemXpath(i));
                I.wait(2)
                I.retry(wait).click(locator.clickAgregarItemXpath(i))
                I.retry(wait).see('AGREGADO')

            }

        }

        I.wait(15);
        I.retry(wait).saveScreenshot('BusquedaProducto.png')

    }


}