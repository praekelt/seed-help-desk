import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as accountActions } from '../../redux/modules/account'
import { LoginForm, LoginForgottenForm, LoginForgottenCodeForm, LoginForgottenNewForm } from '../../components'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  loggedIn: state.account.loggedIn,
  forgottonstage: state.account.forgottonstage
})
export class LoginView extends Component {
    static propTypes = {
      loggedIn: PropTypes.bool.isRequired,
      forgottonstage: PropTypes.number.isRequired
    };
  render () {
    switch (this.props.forgottonstage) {
      case 1:
        return (
          <div className='container text-center'>
            <LoginForgottenForm />
          </div>)
      case 2:
        return (
          <div className='container text-center'>
            <LoginForgottenCodeForm />
          </div>)
      case 3:
        return (
          <div className='container text-center'>
            <LoginForgottenNewForm />
          </div>)
      default:
        return (
          <div className='container text-center'>
              <LoginForm />
          </div>
        )
    }
  }
}

export default connect(mapStateToProps, accountActions)(LoginView)
