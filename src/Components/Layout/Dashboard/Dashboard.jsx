import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../../contexts';

const Dashboard = ({ children }) => {
  const user = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, []);
  return <div>{user ? children : <div>Not access</div>}</div>;
};

export default Dashboard;
