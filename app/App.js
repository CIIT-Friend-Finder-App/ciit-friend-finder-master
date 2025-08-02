import React, {useState} from 'react';
import Login from './Login';
import Landing from './Landing';
import Register from './Register';
import CreateProfile from './CreateProfile';
import ProfilePreview from './ProfilePreview';
import Notifications from './Notifications';
import Account from './Account';

export default function App() {
  const [page, switchPage] = useState('login');

  if (page === 'landing') return <Landing goTo={switchPage} />;
  if (page === 'login') return <Login goTo={switchPage} />;
  if (page === 'register') return <Register goTo={switchPage} />;
  if (page === 'createprofile') return <CreateProfile goTo={switchPage}/>;
  if (page === 'profilepreview') return <ProfilePreview goTo={switchPage}/>;
  if (page === 'notifications') return <Notifications goTo = {switchPage}/>;
  if (page === 'account') return <Account goTo = {switchPage}/>;
}