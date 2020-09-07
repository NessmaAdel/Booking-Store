import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { signUserUp } from '../../store/action';
import './register.scss';


class Register extends Component {
 state = {
  firstName: '',
  lastName:'',
  email: '',
  phone: '',
   password: '',
   formError: false
 }
 handleFirstName = (e) => {
  this.setState({firstName:e.target.value})
 }
 handleLastName = (e) => {
  this.setState({lastName:e.target.value})
 }
 handlePhonenumber = (e) => {
  this.setState({phone:e.target.value})
 }
 handleEmail = (e) => {
  this.setState({email:e.target.value})
 }
 handlePassword = (e) => {
  this.setState({password:e.target.value})
 }
  handleSubmit = (e) => {
    this.props.signUserUp(this.state);
    e.preventDefault();
    const{history}=this.props
    if (this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '' || this.state.phone === '') {
      this.setState({ formError: true });
    } else {
      this.setState({formError:false})
      localStorage.setItem('firstName', this.state.firstName);
      localStorage.setItem('lastName', this.state.lastName);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password);
      localStorage.setItem('phone', this.state.phone);
      history.push('/login')
    }
  }
 render() {
  const { firstName,lastName,email,password,phone,formError} = this.state;
  return (
   <div className="register">
    <Container>
     <Row>
     <Col>
    <div className="Header">
     <h2 className="register-title">Sign Up</h2>
       </div>
       </Col>
     </Row>
     <Row>
      <Col>
      <div className="register-form">
       <Form>
         <FormGroup row>
         <Label for="firstName" sm={6}>First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" sm={6} value={firstName} onChange={this.handleFirstName}/>
         </FormGroup>
         <FormGroup row>
         <Label for="lastName" sm={6}>Last Name</Label>
        <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" sm={6} value={lastName} onChange={this.handleLastName}/>
         </FormGroup>
         <FormGroup row>
         <Label for="email" sm={6}> Your Email </Label>
        <Input type="email" name="email" id="email" placeholder="Enter Your Email" sm={6} value={email} onChange={this.handleEmail}/>
         </FormGroup>
         <FormGroup row>
         <Label for="phone" sm={6}>PhoneNum</Label>
        <Input type="number" name="phone" id="phone" placeholder="Enter Your Phone Number" sm={6} value={phone} onChange={this.handlePhonenumber}/>
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
      <p>If You have already account <Link to="/login">Login</Link></p>
       </div>
      </Col>
     </Row>
     </Container>
   </div>
  )
 }
}
const mapDispatchToProps = (dispatch) => {
  return {
      signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}
export default connect(null, mapDispatchToProps)(Register);