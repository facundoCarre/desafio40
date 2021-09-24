let instance = null

class PersistenciaFactory {

    constructor() { }

    getPersistencia(tipo) {
        if(!instance){
            try {
                instance = require(`./persistencia/${tipo}`);
                //return modulo
            } catch (error) {
                console.log('No se encontro el tipo de persistencia:');
            }
            instance = new instance()
        }
        return instance
    }
}

module.exports = new PersistenciaFactory();