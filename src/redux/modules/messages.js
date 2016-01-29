import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'messages': [
    {'id': 1, 'delete': false, 'received_at': '2016-01-22 18:01', 'from': '+27001', 'message': 'Aliquam pretium risus nisi, ac cursus erat laoreet in. Nunc accumsan mauris eget turpis sagittis, in gravida metus egestas. Sed turpis duis.'},
    {'id': 2, 'delete': false, 'received_at': '2016-01-22 12:01', 'from': '+27002', 'message': 'Phasellus consectetur lacinia lacinia. Aliquam eleifend interdum velit eget pulvinar. Nullam sodales facilisis velit vitae porttitor nullam'},
    {'id': 3, 'delete': false, 'received_at': '2016-01-21 08:01', 'from': '+27003', 'message': 'Phasellus consectetur lacinia lacinia. Aliquam eleifend interdum velit eget pulvinar. Nullam sodales facilisis velit vitae porttitor nullam'},
    {'id': 4, 'delete': false, 'received_at': '2016-01-20 18:11', 'from': '+27003', 'message': 'Fusce porttitor ante a nibh suscipit euismod. Etiam vel vulputate diam, a dictum erat. Etiam imperdiet arcu eget arcu varius porta volutpat.'}
  ],
  'inboxstage': 0
}

// ------------------------------------
// Constants
// ------------------------------------
export const DELETEMESSAGE = 'DELETEMESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export const deleteMessage = createAction(DELETEMESSAGE)

export const actions = {
  deleteMessage
}

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  DELETEMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    messages: state.messages.filter(x => x.id !== payload)
  }))
}, initialState)
