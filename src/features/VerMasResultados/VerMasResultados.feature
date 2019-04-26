Feature: Ingresar a la página de resultados
  Como una consultora suscrita
  Yo quiero buscar productos en Somos Belcorp y poder
  ingresar a la página de resultados
   
@VerMasResultados
Scenario Outline:  Buscar productos por nombre en la barra del buscador
    Given Ingreso el "<Pais>"  mi "<Usuario>" y mi "<Password>"
    When  Ingreso la palabra "<Producto>" en el buscador
    Then  presionar el botón "Ver más resultados" y observar todas las ofertas

Examples:
    |Pais   | Usuario      | Password   | Producto   |
    |PE     | 032610099    | 1234567    | Maquilla   |
    #|PE     | 032610099    | 1234567    | Fragancia  |