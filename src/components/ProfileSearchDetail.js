import React from 'react';
import { ListGroup, Media }from 'react-bootstrap'

const ProfileSearchDetail = props => {
    return (
        <ListGroup.Item>
        <Media>
            <img
            width={100}
            height={100}
            className="align-self-start mr-3"
            src={props.photo}
            alt="Generic placeholder"
            />
        <Media.Body>
            <h5>{props.author}</h5>

            <div>
                <strong>Skills: </strong>
                <span>{props.skill}</span>
                <span> | </span>
                <span>Javascipt</span>
                <span> | </span>
                <span>Web Development</span>
                <span> | </span>
            </div>

            <div>
                <strong>Industry: </strong>
                <span>Defense</span>
            </div>

            <div>
                <strong>OSU Courses Taken: </strong>
                <span>CS225</span>
                <span> | </span>
                <span>CS340</span>
                <span> | </span>
                <span>CS325</span>
                <span> | </span>
            </div>

        </Media.Body>
        </Media>
    </ListGroup.Item>
    );
}

export default ProfileSearchDetail;
