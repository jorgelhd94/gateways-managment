import React, { useContext } from 'react';
import { UserContext } from '../../../contexts';
import SideBar from '../../Navigation/SideBar/SideBar';
import Header from '../../Navigation/Header/Header';

const Dashboard = ({ children }) => {
  const user = useContext(UserContext);

  // return <div>{user ? children : <div>Not access</div>}</div>;
  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="flex flex-col w-full md:space-y-4">
            <Header />
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
