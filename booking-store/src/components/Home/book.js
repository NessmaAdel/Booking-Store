import React from 'react';
import {
 Card, CardImg, CardText, CardBody,
 CardTitle, Button, Container, Row, Col
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import './home.scss';
const Books = (props) => (
 <div className="books">
 <Container>
  <Row>
   <Col sm="4">
 <Card>
 <CardImg top width="100%" src="../../images/book.jpg" alt="Card image cap" />
 <CardBody>
      <CardTitle className="text-center">{props.title}</CardTitle>
      <StarRatings
       rating={props.rating}
       starRatedColor="yellow"
       changeRating={props.changeRating}
       numberOfStars={5}
       name='rating'
       starDimension="20px"
       starSpacing="1px"
       isSelectable={true}
       className="text-center"
      />
      <CardText>{props.desc}</CardText>
      <Button onClick={props.toggle} className="editBtn" color="primary">Edit</Button>
      <Button className="cancleBtn">Cancel</Button>
       </CardBody>
    </Card>
   </Col>
  </Row>
  </Container>
  </div>
);
export default Books