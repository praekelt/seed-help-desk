import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/molLogin.jsx';

class Login extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        invalid: false
      };
    }

    onStatusChange(state) {
      this.setState(state);
    }

  render() {
    return (
        <Grid className="text-center">
          <Row>
            <Col md={6} mdOffset={3}><LoginForm { ...this.state } /></Col>
          </Row>
        </Grid>
    );
  }
}

export default Login;
