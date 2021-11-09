const checkOs = require('../../check-os')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  throw new Error(`Platform info: ${checkOs()}`)
}
