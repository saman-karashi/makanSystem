import React from 'react';
import Menu from '../navbar';

const Layout = ({children}) => {
  return (
    <>
      <Menu />
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout