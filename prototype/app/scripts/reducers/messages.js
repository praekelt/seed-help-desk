import { combineReducers } from 'redux'
import { RECEIVE_MESSAGES, DELETE_FROM_INBOX } from '../constants/ActionTypes'

function messages(state, action) {
  switch (action.type) {
    case DELETE_FROM_INBOX:
      return {
        ...state,
        deleted: true
      }
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return {
        ...state,
        ...action.messages.reduce((obj, message) => {
          obj[message.id] = message
          return obj
        }, {})
      }
    default:
      const { messageId } = action
      if (messageId) {
        return {
          ...state,
          [messageId]: messages(state[messageId], action)
        }
      }
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages.map(message => message.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getMessage(state, id) {
  return state.byId[id]
}

export function getVisibleMessages(state) {
  return state.visibleIds.map(id => getMessage(state, id))
}
