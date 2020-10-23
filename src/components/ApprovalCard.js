import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ApprovalCard = props => {
    return (
    <Card>
        <Card.Body>
            {props.children}
            <Button>Approve</Button>
            <Button>Reject</Button>
        </Card.Body>
    </Card>
    );
};

export default ApprovalCard;