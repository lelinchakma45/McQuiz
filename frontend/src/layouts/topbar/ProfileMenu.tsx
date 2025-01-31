import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
  path?: string;
  action?: () => void;
}

const getMenuItems = (role: string): MenuItems[] => [
  {
    id: 1,
    title: 'View Profile',
    icon: 'bi bi-person-circle',
    path: `/profile`,
  },
  {
    id: 2,
    title: 'Help Center',
    icon: 'bi bi-question-circle',
    path: '/help',
  },
  {
    id: 3,
    title: 'Logout',
    icon: 'bi bi-box-arrow-right',
  },
];

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const menuItems = getMenuItems('student');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = (item: MenuItems) => {
    setIsOpen(false);

    if (item.title === 'Logout') {
      // logout();
      navigate('/signin');
      return;
    }

    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="flex items-center gap-4" ref={menuRef}>
      {/* User Info */}
      <div className="text-right">
        <p className="text-gray-900">
          Welcome <span className="font-bold">Lelin Chakma</span>
        </p>
        <p className="text-sm text-gray-500">
          Student
        </p>
      </div>

      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 rounded-full overflow-hidden hover:opacity-80 transition-opacity border-2 border-white"
      >
        <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center text-lg font-medium">
          LC
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-4 top-20 w-[230px] bg-white rounded-lg shadow-lg overflow-hidden z-50">
          {/* Menu Arrow */}
          <div className="absolute -top-1 right-14 w-2 h-2 bg-white transform rotate-45"></div>

          {/* User Profile Section */}
          <div className="p-4">
            <button 
              className="w-full flex items-center gap-4 rounded-lg hover:bg-gray-50 transition-colors p-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-medium">
                LC
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Suprim</p>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </button>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Menu Items */}
          <div className="p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                className={`w-full flex items-center gap-4 py-4 px-3 rounded-lg transition-colors
                  ${item.title === 'Logout' 
                    ? 'hover:bg-red-50 text-red-600 hover:text-red-700' 
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                  }`}
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;