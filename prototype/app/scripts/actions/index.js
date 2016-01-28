import inbox from '../api/inbox'
import * as types from '../constants/ActionTypes'

function receiveMessages(messages) {
  return {
    type: types.RECEIVE_MESSAGES,
    messages: messages
  }
}

export function getAllMessages() {
  return dispatch => {
    inbox.getMessages(messages => {
      dispatch(receiveMessages(messages))
    })
  }
}

function deleteMessageFromInboxUnsafe(messageId) {
  return {
    type: types.DELETE_FROM_INBOX,
    messageId
  }
}

export function deleteMessage(messageId) {
  return (dispatch, getState) => {
      dispatch(deleteMessageFromInboxUnsafe(messageId))
  }
}
