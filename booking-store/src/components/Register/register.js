import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,Container, Row, Col ,Button} from 'reactstrap';
import './register.scss';
import { Link } from 'react-router-dom';

class Register extends Component {
 state = {
  firstName: '',
  lastName:'',
  email: '',
  phone: '',
  password:''
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
 handleSubmit = () => {
  
 }
 render() {
  const { firstName,lastName,email,password,phone} = this.state;
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
export default Register;