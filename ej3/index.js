const Logger = require('logplease');
const logger = Logger.create('utils');

const numeros = require('./numeros.js')
const parametros =  [2, 3, 101, 201, 202, 100]

parametros.forEach((num) => {
    let resultados = numeros.esPar(num)
    if (resultados === true) {
        return logger.info(`El numero es par`);
    }
    else return logger.error(`El numero no es par`);
})








