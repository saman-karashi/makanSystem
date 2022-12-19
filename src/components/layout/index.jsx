import React from 'react';
import Menu from '../navbar';
import Footer from '../footer';

const Layout = ({children}) => {
  return (
    <>
      <Menu />
        <main>
            {children}
        </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Layout