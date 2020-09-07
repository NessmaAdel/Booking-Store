import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../store/action';
import './login.scss';

class Login extends Component{
 state = {
  email: '',
   password: '',
   formError:false
 }
 handleEmail = (e) => {
  this.setState({ email: e.target.value });
 }
 handlePassword = (e) => {
  this.setState({password:e.target.value})
 }
  handleSubmit = (e) => {
    const{history}=this.props
    if (this.state.email === '' || this.state.password === '') {
      this.setState({ formError: true });
    } else if (localStorage.getItem('email') === this.state.email && localStorage.getItem('password') === this.state.password) {
      this.props.fetchUser(this.state)
      this.setState({formError:false})
      history.push('/home');
      window.location.reload()
    } 
    e.preventDefault();
 }
 render() {
  const {email,password,formError } = this.state;
  return (
   <div className="login">
    <Container>
     <Row>
      <Col>
      <div className="Header">
        <h2 className="login-title">Login</h2>
        </div>
      </Col>
     </Row>
     <Row>
      <Col>
       <div className="login-form">
        <Form>
         <FormGroup row>
         <Label for="email" sm={6}> Your Email </Label>
          <Input type="email" name="email" id="email" placeholder="Enter Your Email" sm={6} value={email} onChange={this.handleEmail}/>
         </FormGroup>
         <FormGroup row>
         <Label for="password" sm={6}>Password </Label>
          <Input type="password" name="password" id="password" placeholder="Enter Your Password" sm={6} value={password} onChange={this.handlePassword}/>
                </FormGroup>
                {formError &&
                <p className="error">
                    Fill all the input fields please.
                </p>
              }
         <FormGroup row>
          <Button  color="primary" className="submit" onClick={this.handleSubmit}>Submit</Button>
          </FormGroup>
        </Form>
        </div>
      </Col>
     </Row>
     <Row>
      <Col>
       <div className="sign-again">
      <p>If You have not account <Link to="/register">Sign Up</Link></p>
       </div>
      </Col>
     </Row>
     </Container>
    </div>
  );
 }
}
const mapDispatchToProps = (dispatch) => {
  return {
      fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
  }
}
export default  connect(null, mapDispatchToProps)(Login);