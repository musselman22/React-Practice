import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from '../pages/landing-page';
import EditProfile from '../pages/edit-profile';
import UserProfile from '../pages/user-profile';
import Endorse from '../pages/endorse';
import SearchPage from '../pages/search';

const App = () => {
  return (
      <BrowserRouter>
        <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/user-profile" exact component={UserProfile} />
        <Route path="/user-profile/edit" exact component={EditProfile} />
        <Route path="/user-profile/endorse" exact component={Endorse} />
        <Route path="/search" exact component={SearchPage} />
        </div>
      </BrowserRouter>
  );
};

export default App;
