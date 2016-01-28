import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';
import MessageListItem from './messageListItem.jsx'

class MessageList extends Component {
  render() {
    const { messages } = this.props
    const hasMessages = messages.length > 0
    const messagelist = !hasMessages ?
      <em>No messages currently.</em> :
      messages.map(message =>
        <MessageListItem message={message} />
    )
    const loading = props.loading ? <div className="loading-label">Loading...</div> : '';

    return (
        <div>
            {loading}
            <Table responsive hover>
                <tbody>
                  {messages}
                </tbody>
            </Table>
        </div>
    )
  }
}

MessageList.propTypes = {
  loading : PropTypes.bool,
  messages : PropTypes.array
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(
  mapStateToProps
)(MessageList)
