import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBard from './SideBard';

const DashBoardLayout = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="sticky top-0 w-full flex items-center justify-between p-8 bg-white md:hidden">
                <button onClick={toggleDrawer(true)}>
                    <i className="bi bi-list text-2xl"></i>
                </button>
                <div>
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex bg-white">
                {/* Sidebar - Hidden on mobile */}
                <div className="hidden md:block sticky top-0 h-screen z-50">
                    <SideBard open={open} toggleDrawer={toggleDrawer} />
                </div>

                {/* Main Content */}
                <div className="max-h-screen overflow-x-auto w-full">
                    <div className="flex-1 p-8">
                        <div className='sticky top-0 bg-white/10 backdrop-blur-md z-10 flex justify-between items-center mb-8 py-3'>
                            <div>
                                <h1 className="mb-3 text-2xl font-semibold">
                                    Good morning, <span className="text-blue-600">Ezzat</span>
                                </h1>
                                <p className="text-gray-600">
                                    Let's get started on engaging with interactive and informative quizzes!
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Profile"
                                    className="w-15 h-15 rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoardLayout;