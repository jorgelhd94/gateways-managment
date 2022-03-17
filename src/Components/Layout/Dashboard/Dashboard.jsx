import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext, OpenSideBarContext } from '../../../contexts';
import SideBar from '../../Navigation/SideBar/SideBar';
import SidebarMobile from '../../Navigation/SideBar/SidebarMobile';
import Header from '../../Navigation/Header/Header';
import LoadingScreen from '../../UI/Preloaders/LoadingScreen/LoadingScreen';

const Dashboard = ({ children }) => {
  const router = useRouter();
  const [user, isUserLoad] = useContext(UserContext);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toogleOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    if (!isUserLoad && !user) {
      router.push('/login');
    }
  }, [isUserLoad]);

  // return <div>{user ? children : <div>Not access</div>}</div>;
  return (
    <div>
      {user ? (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
          <div className="flex items-start justify-between">
            <OpenSideBarContext.Provider value={toogleOpen}>
              <SideBar />
              <SidebarMobile open={openSideBar} />
              <div className="flex flex-col w-full md:space-y-4">
                <Header />
                <div className="overflow-y-scroll h-screen pt-4 pb-32">{children}</div>
              </div>
            </OpenSideBarContext.Provider>
          </div>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Dashboard;
