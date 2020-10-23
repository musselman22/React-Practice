import React from 'react';
import {Container, Row, Col, Figure, Button } from 'react-bootstrap';
import FigureImage from 'react-bootstrap/FigureImage';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import faker from 'faker';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Github Projects
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Microservices Website</h5>
        <p>
          <a href="https://github.com/musselman22/Jacob-Musselman---Oregon-State-University">https://github.com/musselman22/Jacob-Musselman---Oregon-State-University</a>
        </p>
        <h5>Microservices Website</h5>
        <p>
          <a href="https://github.com/musselman22/Jacob-Musselman---Oregon-State-University">https://github.com/musselman22/Jacob-Musselman---Oregon-State-University</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const UserProfile = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Container>
      <Row className="pt-4">
        <Col sm={5}>
          <Figure className="pl-5">
            <FigureImage width={171} height={180} alt="171x180" src={faker.image.avatar()} thumbnail />
          </Figure>
          <div>
          <Button href="/user-profile/edit">
            Edit Profile
          </Button>
          <Button href="/user-profile/endorse">
            Endorse User
          </Button>
          </div>
        </Col>
        <Col sm={7}>
            <div className="pt-3"><h1>Jacob Musselman</h1></div>
            <div className="pt-4"><h2>musselman1989@gmail.com</h2></div>
        </Col>
      </Row>
      <div className="pt-3">
        <h3>
          Skills
        </h3>
        <ListGroup variant="flush">
          <ListGroup.Item>Python</ListGroup.Item>
          <ListGroup.Item>Javascript</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>Web Development</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="pt-3">
        <h3>
          OSU Courses Taken
        </h3>
        <ListGroup variant="flush">
          <ListGroup.Item>CS325</ListGroup.Item>
          <ListGroup.Item>CS161</ListGroup.Item>
          <ListGroup.Item>CS162</ListGroup.Item>
          <ListGroup.Item>CS225</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="pt-3">
        <h3>
          Networking Links
        </h3>
        <ListGroup variant="flush">
          <ListGroup.Item><h5>Github</h5><a href="https://github.com/musselman22">https://github.com/musselman22</a><Button className="float-right"variant="primary" onClick={() => setModalShow(true)}>View Projects</Button></ListGroup.Item>
          <ListGroup.Item><h5>LinkedIn</h5></ListGroup.Item>
          <ListGroup.Item><h5>Twitter</h5></ListGroup.Item>
        </ListGroup>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
    </>
  );
};

export default UserProfile;