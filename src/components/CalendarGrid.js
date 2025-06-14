import React from 'react';
import dayjs from 'dayjs';
import EventBadge from './EventBadge';

const CalendarGrid = ({ date, events }) => {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');
  const startDay = startOfMonth.day();
  const totalDays = 42;
  const today = dayjs();

  let grid = [];
  let current = startOfMonth.subtract(startDay, 'day');

  for (let i = 0; i < totalDays; i++) {
    const dayEvents = events.filter(event => dayjs(event.date).isSame(current, 'day'));
    grid.push(
      <div
        key={i}
        className={`p-2 border rounded-md h-28 overflow-auto ${
          current.month() === date.month() ? 'bg-white' : 'bg-gray-100'
        } ${today.isSame(current, 'day') ? 'border-blue-500' : 'border-gray-300'}`}
      >
        <div className="text-sm font-bold">{current.date()}</div>
        {dayEvents.map((event, idx) => (
          <EventBadge key={idx} event={event} />
        ))}
      </div>
    );
    current = current.add(1, 'day');
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div key={d} className="text-center font-medium text-sm uppercase">{d}</div>
      ))}
      {grid}
    </div>
  );
};

export default CalendarGrid;