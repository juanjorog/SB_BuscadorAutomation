# SB_BuscadorAutomation
Incluye los scripts de casos de pruebas para el buscador de Somos Belcorp

*PRE-REQUISITOS*

***
1. Entorno: Nodejs v8.1.11 (como mínimo): https://nodejs.org/en/
2. IDE: Visual Studio Code: https://code.visualstudio.com/docs/?dv=win
3. Extensión Cucumber (Gherkin) full support.

*PASOS PARA INSTALAR*

***
De modo global (CLI), desde la raíz de la solución vía terminal.
1. npm install
2. Crear una carpeta propia con el nombre del proyecto e instalar: npm install -g codeceptjs puppeteer mochawesome
3. npm install -g mocha@5.2.0
5. Adicionar configuración con lo necesario de codecept.json y package.json

*codecept.conf.js*

```json
const steps= require("./src/features");

exports.config = {
  output: './report',
  helpers: {
    Puppeteer: {
      url: '[URL donde será ejecutada la prueba]',
     //fullPageScreenshots: true,
      windowSize: "1350x720",
      show:true,
      chrome: {
        args: [
              //'--use-fake-ui-for-media-stream',
              //'--disable-web-security',
              //'--use-fake-device-for-media-stream',
              //'--allow-file-access-from-files',
              //'--allow-running-insecure-content',
              '--window-size=1920,1080'
        ]
    }
      
    },
    Mochawesome: {  
      uniqueScreenshotNames: true
                }
  },
  include: {},
  mocha: {
    reporterOptions: {
      reportDir: "./report/",
      reportFilename: '[Nombre_del_reporte]',
      reportTitle: '[Titulo_del_Reporte]',
      autoOpen:true,
      ts:'',
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/**/**/*.feature',
    steps: [
      ...steps
         ]
  },
  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: '[Nombre_del_Test]'
}

//console.log(module.exports.config)
```
*package.json*

```json
{
  "name": "[Nombre_del_Proyecto]",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "codeceptjs run --grep @[Etiqueta_Feature] --debug --reporter mochawesome"
  },
  "keywords": [],
  "author": "Nombre del creador",
  "license": "ISC",
  "devDependencies": {
    "codeceptjs": "^2.1.0",
    "mocha": "^5.2.0",
    "mochawesome": "^3.1.1",
    "puppeteer": "^1.14.0"
  }
}
```
*EJECUCIÓN DE UN TEST*

***
1. codeceptjs run --features --reporter mochawesome (Corren todas las pruebas contenidas en el folder "features").
2. npm test (Verifica el archivo package.json, en el campo "test").
