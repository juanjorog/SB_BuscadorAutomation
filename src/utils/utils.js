//const configLocator= require('./configLocator')
let fs = require('fs');

function fnGetFiles (dir, filter='', files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            fnGetFiles(name, filter, files_);
        } else if(name.indexOf(filter)>=0) {
            files_.push(name);
        }
    }
    return files_;
}

function fnGetConfig(CodigoPais) {
  let config="";
  switch(CodigoPais) {
      case "PE":
      config= Object.assign(configLocator.PE,configLocator.Global);
      break;
      case "BO":
        // code block
        config= Object.assign(configLocator.PE,configLocator.Global);
        break;
      case "MX":
        // code block
        config= Object.assign(configLocator.MX,configLocator.Global);
        break;
      case "CO":
        // code block
        config= Object.assign(configLocator.PE,configLocator.Global);
        break;
      case "CR":
        // code block
        config= Object.assign(configLocator.PE,configLocator.Global);
        break;
      //default:
        // code block
    }
    return config;
}

module.exports.fnGetConfig=fnGetConfig;
module.exports.fnGetFiles=fnGetFiles;