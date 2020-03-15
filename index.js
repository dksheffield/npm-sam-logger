/**
 * Simple function that will log when developing in SAM and in Cloudwatch
 * 
 * @param {string} prefix String to prefix the log entry with 
 * @param {any} data JS Object, String, Array or whatever you want to log 
 */
function jsonLog(prefix, data) {
  console.log(`${prefix}: ${JSON.stringify(data,null,2)}`);
}

/**
 * Simple function that will only log when developing in SAM
 * 
 * @param {string} prefix String to prefix the log entry with 
 * @param {any} data JS Object, String, Array or whatever you want to log 
 * @param {object} env process.env - to determine if you are running the SAM 
 *                     environment or not
 */
function samJsonLog(prefix, data, env) {
  if (env.AWS_SAM_LOCAL) {
    console.log(`${prefix}: ${JSON.stringify(data,null,2)}`);
  }
}

/**
 * Simple function that will only log when developing in SAM, will not JSONify 
 * anything
 * 
 * @param {string} prefix String to prefix the log entry with 
 * @param {any} data JS Object, String, Array or whatever you want to log 
 * @param {object} env process.env - to determine if you are running the SAM 
 *                     environment or not
 */
function samLog(message, env) {
  if (env.AWS_SAM_LOCAL) {
    console.log(message);
  }
}

module.exports = {
  jsonLog: jsonLog,
  samJsonLog: samJsonLog,
  samLog: samLog
};