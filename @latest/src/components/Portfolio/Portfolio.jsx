import React, { useState } from 'react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600', bgColor: 'bg-rose-400' },
    { id: 2, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600', bgColor: 'bg-cyan-500',},
    { id: 3, image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=600', bgColor: 'bg-gray-900' },
    { id: 4, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600', bgColor: 'bg-rose-400' },
    { id: 5, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600', bgColor: 'bg-cyan-500' },
    { id: 6, image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=600', bgColor: 'bg-gray-900' }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">PORTFOLIO COMPONENT</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-1 bg-gray-800"></div>
            <svg className="w-6 h-6 text-gray-800 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => !item.isAddNew && setSelectedImage(item)}
              className={`${item.bgColor} rounded-lg aspect-square flex items-center justify-center relative group cursor-pointer`}
            >
              {item.isAddNew ? (
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              ) : (
                <>
                  <div className="w-64 h-64 rounded-full overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage.image} alt="" className="max-h-screen rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}