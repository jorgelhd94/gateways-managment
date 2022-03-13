import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../../contexts';

const Dashboard = ({ children }) => {
  const user = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push('/login');
    }
  });
  return <div>{children}</div>;
};

export default Dashboard;
