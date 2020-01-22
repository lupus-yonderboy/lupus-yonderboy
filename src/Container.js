import React from 'react';

import './Container.css';

export const Container = ({ children }) => {
  return (
    <div className='container'>
      <div>
        {children}
      </div>
    </div>
  );
};
