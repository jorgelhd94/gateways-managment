import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts';

const Dashboard = ({ children }) => {
  const user = useContext(UserContext);

  return <div>{user ? children : <div>Not access</div>}</div>;
};

export default Dashboard;
