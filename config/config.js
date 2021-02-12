/**
 * 
 * @fileoverview Archivo de Variables globales.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 * Aquí vamos a definir todas las variables de entorno enviroments var.
 */

/**
 * ENV Puerto del servidor
 */

process.env.PORT = process.env.PORT || 4000;

/**
 * ENV Host del servidor
 */

process.env.HOST = process.env.HOST || 'localhost';

/**
 * ENV Entorno de node
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * ENV Vencimento Token
 */

process.env.EXPIRATION_TOKEN = '1h';

/**
 * ENV SEED  del token
 */

process.env.SEED = process.env.SEED || 'dev';

/**
 * ENV twilio
 */
//TODO: ambos secret se deben como agregar en el entorno de desarrollo y si es en producción se deben crear las variables de entorno en el servicio que aloja el API.
process.env.TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'AC8991b570b5dba9ea34eed161ab0e6467';
process.env.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || '4f575a3843fdd85606991f996fdc965a';


/**
 * Base de Datos
 */
// let URL_DB;

// HOST del BD y NAME
process.env.HOST_DB = process.env.HOST_DB || 'localhost';
process.env.NAME_DATA_DB = process.env.NAME_DATA_DB || 'ROP';

process.env.NODE_ENV === 'dev' ? process.env.URL_DB = `mongodb://${process.env.HOST_DB}:27017/${process.env.NAME_DATA_DB}` : pocess.env.URL_DB = process.env.MONGO_URI;

/**
 * Google Client ID
 */

process.env.CLIENT_ID = process.env.CLIENT_ID || '836785229845-9ps66fae4vmt423rs99f03jnr2ugp6jf.apps.googleusercontent.com';