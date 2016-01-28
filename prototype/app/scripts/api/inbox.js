/**
 * Mocking client-server processing
 */
import _messages from './messages.json'

const TIMEOUT = 100

export default {
  getMessages(cb, timeout) {
    setTimeout(() => cb(_messages), timeout || TIMEOUT)
  },

  deleteMessages(payload, cb, timeout) {
    setTimeout(() => cb(), timeout || TIMEOUT)
  }
}
