import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { setUser } from '../../store/action';
import './profile.scss';
import Header from '../Home/header';
const Profile = (props) => (
 <>
 <Header />
 <div className="profile-page">
 <Container>
     <Row>
    <Col sm="3">
     <div className="profile-image">
      <img src="../../images/profile.jpg" className="img-thumbnail"></img>
     </div>
    </Col>
    <Col sm="9">
     <div className="profile-info">
      <Row>
       <Col sm="5">
        <p>Full Name :</p>
       </Col>
       <Col sm="7">
        <span>{props.user.firstname + '' + props.user.lastname}</span>
       </Col>
      </Row>
      <Row>
       <Col sm="5">
        <p>Your Email:</p>
       </Col>
       <Col sm="7">
        <span>{props.user.email}</span>
       </Col>
      </Row>
      <Row>
       <Col sm="5">
        <p>Phone Number:</p>
       </Col>
       <Col sm="7">
        <span>{props.user.Phone}</span>
       </Col>
      </Row>
     </div>
    </Col>
   </Row>
   </Container>
  </div>
  </>
)
const mapStateToProps = state => ({
 user: state.user
});
export default connect(mapStateToProps)(Profile);