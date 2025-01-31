import React from 'react';
import { Link } from 'react-router-dom';
import { bottomNavigation, Route, sitemap } from '../../routes/sitemap';

// Sidebar component props
interface SidebarProps {
  open: boolean;
  toggleDrawer: (open: boolean) => () => void;
  currentPath?: string;
}

// Individual menu item component
const MenuItem: React.FC<Route & { currentPath?: string }> = ({ 
  path, 
  label, 
  icon, 
  active, 
  currentPath,
  children 
}) => {
  // Check if the current route is active
  const isRouteActive = (routePath: string) => {
    // Exact match or child route match
    return currentPath === routePath || 
           (currentPath?.startsWith(routePath) && routePath !== '/');
  };

  const isCurrentRouteActive = isRouteActive(path);
  
  // If the route has children, render a dropdown-like structure
  if (children && children.length > 0) {
    const hasActiveChild = children.some(child => isRouteActive(child.path));
    
    return (
      <div className="group">
        <button className={`flex items-center gap-4 py-2 px-4 rounded-lg w-full cursor-pointer transition-colors
          ${(isCurrentRouteActive || hasActiveChild) ? 'bg-green-600 text-white' : 'hover:bg-gray-100'}`}>
          <i className={`bi ${icon}`} />
          <span>{label}</span>
          {children.length > 0 && (
            <i className={`bi bi-chevron-${hasActiveChild ? 'down' : 'right'} ml-auto`} />
          )}
        </button>
        <div className={`pl-6 ${(hasActiveChild) ? 'block' : 'hidden group-hover:block'}`}>
          {children.map((child, index) => (
            <Link 
              key={index} 
              to={child.path} 
              className={`block py-1 px-2 rounded 
                ${isRouteActive(child.path) 
                  ? 'bg-green-100 text-green-700' 
                  : 'hover:bg-gray-100'}`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Standard menu item
  return (
    <Link 
      to={path} 
      className={`flex items-center gap-4 py-2 px-4 rounded-lg w-full cursor-pointer transition-colors
        ${isCurrentRouteActive 
          ? 'bg-green-600 text-white' 
          : (active === false 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'hover:bg-gray-100')}`}
      {...(active === false ? { 'aria-disabled': true } : {})}
    >
      <i className={`bi ${icon}`} />
      <span>{label}</span>
    </Link>
  );
};

// Menu content component
const MenuContent: React.FC<{ currentPath?: string }> = ({ currentPath }) => (
  <div className="flex flex-col h-screen bg-white p-8 w-60">
    {/* Logo */}
    <div className="flex items-center mb-10">
      <h1 className="text-2xl font-bold">
        <span className="text-blue-600">L</span>OGO
      </h1>
    </div>

    {/* Navigation Links */}
    <div className="flex-1">
      {sitemap.map((route, index) => (
        <MenuItem key={index} {...route} currentPath={currentPath} />
      ))}
    </div>

    {/* Bottom Actions */}
    <div>
      {bottomNavigation.map((route, index) => (
        <MenuItem key={index} {...route} currentPath={currentPath} />
      ))}
    </div>
  </div>
);

// Main Sidebar component
const Sidebard: React.FC<SidebarProps> = ({ open, toggleDrawer, currentPath }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <MenuContent currentPath={currentPath} />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300
            ${open ? 'opacity-50' : 'opacity-0'}`}
          onClick={toggleDrawer(false)}
        />

        {/* Drawer */}
        <div 
          className={`absolute left-0 top-0 h-full transform transition-transform duration-300
            ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="h-full" role="presentation" onClick={toggleDrawer(false)}>
            <MenuContent currentPath={currentPath} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebard;