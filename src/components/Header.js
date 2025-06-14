import React from 'react';
import dayjs from 'dayjs';

const Header = ({ date, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <button onClick={onPrev} className="text-lg font-semibold text-indigo-500">←</button>
      <h1 className="text-2xl font-bold">{date.format('MMMM YYYY')}</h1>
      <button onClick={onNext} className="text-lg font-semibold text-indigo-500">→</button>
    </div>
  );
};

export default Header;