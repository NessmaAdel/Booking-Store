import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
 state = {
  isOpen: false,
  modal: false,
  title: '',
  desc: '',
  rating: ''
}
toggle = () => {
 this.setState({isOpen:true})
}
toggleModal = () => {
 this.setState({modal: !this.state.modal})
}
handleTitle = (e) => {
 this.setState({title:e.target.value})
}
handleDesc = (e) => {
 this.setState({ desc: e.target.value });
}
changeingRating = (newRating,name) => {
 this.setState({rating: newRating})
}
handleSaved = (e) => {
 localStorage.setItem('title', this.state.title);
 localStorage.setItem('desc', this.state.desc);
 e.preventDefault();
 window.location.reload();
 this.setState({toggleModal:false})
}
 render() {
  const { isOpen, modal, title, desc } = this.state;
  return (
   <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Home</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={isOpen} navbar>
     <Nav className="mr-auto" navbar>
      <NavItem>
       <Button onClick={this.toggleModal}>Add Book</Button>
       <Modal isOpen={modal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Add Book</ModalHeader>
        <ModalBody>
         <Form>
          <FormGroup row>
           <Label for="title" sm={12}>Book Title</Label>
           <Input type="text" name="title" id="title" placeholder="Enter Book Title" sm={12} value={title} onChange={this.handleTitle} />
          </FormGroup>
          <FormGroup row>
           <Label for="desc" sm={12}>Book Description</Label>
           <Input type="textarea" name="desc" id="desc" placeholder="Enter Book Description" sm={12} value={desc} onChange={this.handleDesc} />
          </FormGroup>
         </Form>
        </ModalBody>
        <ModalFooter>
         <Button color="primary" onClick={this.handleSaved}>Save</Button>{' '}
         <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
       </Modal>
      </NavItem>
     </Nav>
     <Link to='/profile'><img src="../../images/profile.jpg" className="rounded-circle" style={{ width: "50px", height: "50px" }} /></Link>
    </Collapse>
   </Navbar>
  );
 }
}
export default Header;