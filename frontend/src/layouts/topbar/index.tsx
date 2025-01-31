import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/logo.png';
import ProfileMenu from './ProfileMenu';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <div className="flex justify-between items-center h-[90px] bg-blue-50 sticky top-0 z-50 px-14 print:hidden">
      {/* Left Side - Logo and Menu Button */}
      <div className="flex items-center gap-4 sm:gap-8">
        {/* Logo - Hidden on mobile and large screens */}
        <Link 
          to="/"
          className="hidden sm:block lg:hidden"
        >
          <img 
            src={LogoImg} 
            alt="logo" 
            className="h-14 w-14"
          />
        </Link>

        {/* Menu Button - Hidden on large screens */}
        <div className="block lg:hidden">
          <button
            className="p-2 hover:bg-blue-100 rounded-full transition-colors"
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Right Side - Profile Menu */}
      <div className="flex items-center gap-4 sm:gap-8">
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Topbar;