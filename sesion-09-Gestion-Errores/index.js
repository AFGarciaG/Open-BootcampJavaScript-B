const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
],
})





// logger.log('Estoy saliendo por pantalla')
logger.info('hola esto es un mensaje informativo')
logger.debug('Esto es un mensaje de debu')
logger.warn('Esto es un mensaje de advertencia')
logger.error('Esto es un error')


