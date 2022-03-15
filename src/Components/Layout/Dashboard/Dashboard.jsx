import React, { useState, useContext } from 'react';
import { UserContext, OpenSideBarContext } from '../../../contexts';
import SideBar from '../../Navigation/SideBar/SideBar';
import SidebarMobile from '../../Navigation/SideBar/SidebarMobile';
import Header from '../../Navigation/Header/Header';

const Dashboard = ({ children }) => {
  const user = useContext(UserContext);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toogleOpen = () => {
    setOpenSideBar(!openSideBar)
  };

  // return <div>{user ? children : <div>Not access</div>}</div>;
  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <OpenSideBarContext.Provider value={toogleOpen}>
            <SideBar />
            <SidebarMobile open={openSideBar} />
            <div className="flex flex-col w-full md:space-y-4">
              <Header />
              {children}
            </div>
          </OpenSideBarContext.Provider>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
