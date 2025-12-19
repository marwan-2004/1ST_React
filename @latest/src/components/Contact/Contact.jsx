import React, { useState } from 'react';

export default function Contact() {
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">CONTACT SECTION</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-1 bg-gray-800"></div>
            <svg className="w-6 h-6 text-gray-800 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-8">
          <div>
            <input
              type="text"
              name="userName"
              
              
              placeholder="userName"
              className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-teal-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
            />
          </div>

          <div>
            <input
              type="number"
              name="userAge"
              
              placeholder="userAge"
              className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-teal-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="userEmail"
              
              placeholder="userEmail"
              className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-teal-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
            />
          </div>

          <div>
            <input
              type="password"
              name="userPassword"
              
              placeholder="userPassword"
              className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-teal-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
            />
          </div>

          <div className="flex justify-start pt-4">
            <button
              
              className="px-8 py-3 bg-teal-500 text-white font-medium rounded hover:bg-teal-600 transition-colors shadow-md"
            >
              send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
