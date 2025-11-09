"use client";
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
            aria-label="Close"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Close
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease; }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
    </div>
  );
}
