
import React, { ReactNode } from 'react';
import { XIcon } from '../icons/Icons';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm transition-opacity" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-xl dark:bg-slate-900 border border-slate-700 transition-transform transform scale-95 opacity-0 animate-scale-in">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white" id="modal-title">
            {title}
          </h3>
          <button type="button" onClick={onClose} className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-slate-700 dark:hover:text-white" aria-label="Close modal">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
        <div className="flex items-center justify-end p-6 space-x-2 border-t border-slate-200 rounded-b dark:border-slate-700">
            <button onClick={onClose} type="button" className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-600">No, cancel</button>
            <button onClick={handleConfirm} type="button" className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700">Yes, I'm sure</button>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ConfirmationModal;
