
Login = {
  locator: {
            selectPais: {name:"CodigoISO"},
            fieldUsuario: {id:"txtUsuario"},
            fieldPassword: {id:"txtContrasenia"},
            clickLogin: {id:"btnLogin"},
            clickLogout: {id:"lnk-sup-cerrar-sesion"},
            clickIngresaFacebook:{id:"btnLoginFB"},
            clickOlvidasteContrasena: {id:"loginanterior"},
            clickCerrarPopup: {xpath:'//*[@id="PopShowroomVenta"]/div/a'}
           
  }
}

module.exports.login=Login;
module.exports.locator=Login.locator
