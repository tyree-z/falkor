// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AnalyticsController {
  async ingest({ request }) {
    const eventData = request.body()
    console.log(eventData)

    return { message: 'Ingested successfully', eventType: eventData.eventInfo.eventType }
  }
}
