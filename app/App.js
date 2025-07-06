import React, {useState} from 'react';
import Login from './Login';
import Swipe from './Swipe';

export default function App() {
  const [page, switchPage] = useState('login');

  if (page === 'swipe') return <Swipe goTo={switchPage} />;
  if (page === 'login') return <Login goTo={switchPage} />;
}