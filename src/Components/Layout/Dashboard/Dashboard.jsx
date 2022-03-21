import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { auth, onAuthStateChanged } from '../../../includes/firebase';
import { OpenSideBarContext } from '../../../contexts';
import SideBar from '../../Navigation/SideBar/SideBar';
import SidebarMobile from '../../Navigation/SideBar/SidebarMobile';
import Header from '../../Navigation/Header/Header';
import LoadingScreen from '../../UI/Preloaders/LoadingScreen/LoadingScreen';

import { UserContext } from '../../../contexts';

const Dashboard = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isUserLoad, setIsUserLoad] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toogleOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (userRes) => {
        if (userRes) {
          setUser(userRes);
        }
        setIsUserLoad(false);
      },
      () => {
        router.push('/login');
      }
    );

    return () => unsub();
  });

  const checkAuth = () => {
    if (!isUserLoad && !user) {
      router.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
    router.events.on('routeChangeComplete', checkAuth);

    return () => {
      router.events.off('routeChangeComplete', checkAuth);
    };
  }, [isUserLoad]);

  return (
    <UserContext.Provider value={[user, isUserLoad]}>
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
    </UserContext.Provider>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;
