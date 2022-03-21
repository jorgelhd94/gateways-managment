import React from 'react';
import styles from './LoadingScreen.module.css';
import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <div className={styles.Loader}>
      <div className="flex justify-center h-screen w-screen">
        <Image src="/assets/img/cube.svg" width={60} height={60} priority />
      </div>
    </div>
  );
};

export default LoadingScreen;
