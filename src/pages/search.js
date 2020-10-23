import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ProfileSearchDetail from '../components/ProfileSearchDetail';
import faker from 'faker';

const SearchPage = () => {
  return (
    <div className="pt-5 container">
      <h4>Search Profiles</h4>
      <div className="pt-3">
        <ListGroup variant="flush">
            <ProfileSearchDetail 
                author="Sam" 
                skill="Python" 
                photo={faker.image.avatar()} 
            />
            <ProfileSearchDetail 
                author="Jacob" 
                skill="C#" 
                photo={faker.image.avatar()} 
            />
            <ProfileSearchDetail 
                author="Sophie" s
                kill="Javascript" 
                photo={faker.image.avatar()} 
            />
        </ListGroup>
      </div>
    </div>
  );
};

export default SearchPage;