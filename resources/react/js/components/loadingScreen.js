import React from 'react';
import { Loader } from 'sendy-ui';

const LoadingScreen = () => (
  <div className="absolute bg-grey-100 h-screen w-screen inset-0 flex items-center justify-center">
    <Loader utilityClasses="relative" />
  </div>
);

export default LoadingScreen;
