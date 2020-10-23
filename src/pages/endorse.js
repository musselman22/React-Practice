import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const Endorse = () => {
  return (
    <Container>
      <h1 className="pt-5">Endorse Profile<span className="float-right"><Button href="/user-profile">Back</Button></span></h1>
      <Form>
        <Form.Group>
          <Form.Label className="pt-3">Choose a category:</Form.Label>
          <Form.Control as="select" multiple>
            <option>Skills</option>
            <option>Industry</option>
            <option>Courses Taken</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Add Endorsement:</Form.Label>
          <Form.Control type="text" placeholder="Endorse here" />
        </Form.Group>
        <div className="pt-3">
          <Button type="submit">Submit Endorsement</Button>
        </div>
      </Form>
    </Container>
  )
};

export default Endorse;