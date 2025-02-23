/**********************************************************************************
 * MIT License                                                                    *
 *                                                                                *
 * Copyright (c) 2021 Hyperjump Technology                                        *
 *                                                                                *
 * Permission is hereby granted, free of charge, to any person obtaining a copy   *
 * of this software and associated documentation files (the "Software"), to deal  *
 * in the Software without restriction, including without limitation the rights   *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      *
 * copies of the Software, and to permit persons to whom the Software is          *
 * furnished to do so, subject to the following conditions:                       *
 *                                                                                *
 * The above copyright notice and this permission notice shall be included in all *
 * copies or substantial portions of the Software.                                *
 *                                                                                *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    *
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  *
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  *
 * SOFTWARE.                                                                      *
 **********************************************************************************/

import { Probe, ProbeAlert } from '../../interfaces/probe'
import { Notification } from '../../interfaces/notification'
import { ProbeRequestResponse } from '../../interfaces/request'
import { log } from '../../utils/pino'
import { saveProbeRequestLog, saveNotificationLog } from './history'

export class RequestLog {
  private iteration: number

  private probe: Probe

  private requestIndex: number

  private response?: ProbeRequestResponse

  private triggeredAlerts: ProbeAlert[] = []

  private sentNotifications: {
    notification: Notification
    alertQuery: string
    type: 'NOTIFY-INCIDENT' | 'NOTIFY-RECOVER'
  }[] = []

  private errors: string[] = []

  private get request() {
    return this.probe.requests[this.requestIndex]
  }

  get hasIncidentOrRecovery() {
    return this.sentNotifications.length > 0
  }

  constructor(probe: Probe, requestIndex: number, iteration: number) {
    this.iteration = iteration
    this.probe = probe
    this.requestIndex = requestIndex
  }

  setResponse(response: ProbeRequestResponse) {
    this.response = response
  }

  addAlerts(alerts: ProbeAlert[]) {
    this.triggeredAlerts.push(...alerts)
  }

  addNotifications(
    data: {
      notification: Notification
      type: 'NOTIFY-INCIDENT' | 'NOTIFY-RECOVER'
      alertQuery: string
    }[]
  ) {
    this.sentNotifications.push(...data)
  }

  addError(error: string) {
    this.errors.push(error)
  }

  print() {
    const reversedSentNotifications = this.sentNotifications.slice().reverse()
    const printedNotification =
      reversedSentNotifications.find(
        (notif) => notif.type === 'NOTIFY-INCIDENT'
      ) ||
      reversedSentNotifications.find((notif) => notif.type === 'NOTIFY-RECOVER')

    const time = new Date().toISOString()

    let alertMsg = ''
    let errorMsg = ''
    let notifMsg = ''

    const probeMsg = `${this.iteration} id:${this.probe.id} ${
      this.response?.status || '-'
    } ${this.request.method} ${this.request.url} ${
      this.response?.responseTime || '-'
    }ms`

    if (printedNotification) {
      notifMsg = `, NOTIF: ${
        printedNotification.type === 'NOTIFY-INCIDENT'
          ? 'service probably down'
          : 'service is back up'
      }`
    }

    if (this.errors.length > 0) {
      errorMsg = `, ERROR: ${this.errors.join(', ')}`
    }

    if (this.triggeredAlerts.length > 0) {
      alertMsg = `, ALERT: ${this.triggeredAlerts
        .map((alert) => alert.query)
        .join(', ')}`
    }

    const logMsg = `${time} ${probeMsg}${errorMsg || alertMsg}${notifMsg}`

    if (this.errors.length > 0 || this.triggeredAlerts.length > 0) {
      log.warn(logMsg)
    } else {
      log.info(logMsg)
    }
  }

  async saveToDatabase() {
    await Promise.all([
      saveProbeRequestLog({
        probe: this.probe,
        requestIndex: this.requestIndex,
        probeRes: this.response!,
        alertQueries: this.triggeredAlerts.map((alert) => alert.query),
        error: this.errors.join(', '),
      }),
      ...this.sentNotifications.map((sent) =>
        saveNotificationLog(
          this.probe,
          sent.notification,
          sent.type,
          sent.alertQuery
        )
      ),
    ])
  }
}
