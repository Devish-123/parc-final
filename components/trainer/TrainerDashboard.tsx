import React, { useState } from 'react';
import { Role } from '../../types';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import TrainerHome from './TrainerHome';
import TrainerSchedules from './TrainerSchedules';
import TrainerMaterialManager from './TrainerMaterialManager';
import TrainerStudentManager from './TrainerStudentManager';
import TrainerBilling from './TrainerBilling';

// FIX: Switched to a named export to resolve a module loading issue.
export const TrainerDashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case 'schedules':
        return <TrainerSchedules />;
      case 'materials':
        return <TrainerMaterialManager />;
      case 'students':
        return <TrainerStudentManager />;
      case 'billing':
        return <TrainerBilling />;
      case 'dashboard':
      default:
        return <TrainerHome setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen text-slate-800 overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        userRole={Role.TRAINER} 
        isOpen={isSidebarOpen} 
      />
      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
            {renderView()}
        </main>
        <Footer />
      </div>
    </div>
  );
};