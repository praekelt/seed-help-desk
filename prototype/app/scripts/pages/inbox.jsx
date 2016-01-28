import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteMessage } from '../actions'
import { getVisibleMessages } from '../reducers/messages'
import MessageListItem from '../components/messageListItem.jsx';
import MessageStore from '../stores/messageStore';
import MessageActions from '../actions/messageActions';
import { Grid, Row, Col, Nav, NavItem, Badge } from 'react-bootstrap';

class Inbox extends Component {
    render() {
      const { messages } = this.props
      const loading = props.loading ? <div className="loading-label">Loading...</div> : '';


      return (
          <Grid>
            <Row>
              <Col sm={4} md={3}>
                <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                  <NavItem eventKey={1}>Messages Inbox <Badge>3</Badge></NavItem>
                  <NavItem eventKey={2}>Open Cases<Badge>0</Badge></NavItem>
                  <NavItem eventKey={3}>Archive</NavItem>
                </Nav>
              </Col>
              <Col sm={8} md={9}>
                  <div>
                      {loading}
                      <Table responsive hover>
                          <tbody>
                              {messages.map(message =>  <MessageListItem message={message} />)}
                          </tbody>
                      </Table>
                  </div>
              </Col>
            </Row>
          </Grid>
      );
    }

}

Inbox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    received_at: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })).isRequired,
  deleteMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: getVisibleProducts(state.messages)
  }
}

export default connect(
  mapStateToProps,
  { deleteMessage }
)(Inbox)
