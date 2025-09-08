
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { MenuIcon, SearchIcon, BellIcon, LogoutIcon } from '../icons/Icons';
import ConfirmationModal from './ConfirmationModal';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    const { user, logout } = useAuth();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setIsLogoutModalOpen(false);
    };

    return (
        <>
            <header className="flex justify-between items-center px-6 py-3 bg-white border-b border-slate-200">
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={toggleSidebar} 
                        className="text-slate-500 hover:text-slate-600 focus:outline-none"
                        aria-label="Toggle sidebar"
                    >
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-slate-500 hover:text-slate-600 focus:outline-none">
                        <SearchIcon className="h-5 w-5" />
                    </button>
                    <button className="text-slate-500 hover:text-slate-600 focus:outline-none">
                        <BellIcon className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => setIsLogoutModalOpen(true)}
                        className="text-slate-500 hover:text-red-600 focus:outline-none"
                        aria-label="Logout"
                    >
                        <LogoutIcon className="h-6 w-6" />
                    </button>
                    <div className="flex items-center">
                        <span className="hidden sm:inline text-slate-600 mr-2">{user?.name || 'Hi User'}</span>
                        <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                </div>
            </header>

            <ConfirmationModal
                isOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                onConfirm={handleLogout}
                title="Confirm Logout"
            >
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Are you sure you want to log out?
                </p>
            </ConfirmationModal>
        </>
    );
};

export default Header;
