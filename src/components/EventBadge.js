import React from 'react';

const colorPool = [
  'bg-blue-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-pink-100',
  'bg-purple-100'
];

const EventBadge = ({ event }) => {
  const color = colorPool[Math.floor(Math.random() * colorPool.length)];
  return (
    <div className={`mt-1 p-1 text-xs rounded ${color}`}>{event.time} - {event.title}</div>
  );
};

export default EventBadge;