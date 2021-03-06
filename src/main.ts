import { Aurelia } from 'aurelia-framework'
import environment from './environment'

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration().feature('resources')

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn')

  requirejs.config({ paths: { vs: '../scripts/vs' } })
  return aurelia.start().then(() => aurelia.setRoot())
}
