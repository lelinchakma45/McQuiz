import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './topbar';
import SideBard from '../panels/layouts/SideBard';

const PanelLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-[#f2f3f3] bg-trans">
      {/* <SideBar
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
        setIsClosing={setIsClosing} 
      /> */}
      
      <main className="flex flex-col w-full lg:w-[calc(100%-252px)] flex-grow">
        <Topbar 
          isClosing={isClosing} 
          mobileOpen={mobileOpen} 
          setMobileOpen={setMobileOpen} 
        />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PanelLayout;