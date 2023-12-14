import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Logger from '@ioc:Adonis/Core/Logger'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    Logger.info('AppProvider registered')
    // Register your own bindings
  }

  public async boot() {
    Logger.info('AppProvider booted')
    // IoC container is ready
  }

  public async ready() {
    Logger.info('AppProvider ready')
    // App is ready
  }

  public async shutdown() {
    Logger.info('AppProvider shutdown')
    // Cleanup, since app is going down
  }
}
