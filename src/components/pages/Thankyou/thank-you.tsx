import React from 'react';

const Thankyou: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Thank You!</h1>
      <p className="text-xl text-gray-700 max-w-xl">
        Your form has been submitted successfully.
      </p>
    </div>
  );
};

export default Thankyou;
