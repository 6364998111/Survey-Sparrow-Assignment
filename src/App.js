import React, { useState } from 'react';
import dayjs from 'dayjs';
import CalendarGrid from './components/CalendarGrid';
import Header from './components/Header';
import events from './data/events.json';

function App() {
  const [date, setDate] = useState(dayjs());

  const handlePrevMonth = () => setDate(date.subtract(1, 'month'));
  const handleNextMonth = () => setDate(date.add(1, 'month'));

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-5">
        <Header date={date} onPrev={handlePrevMonth} onNext={handleNextMonth} />
        <CalendarGrid date={date} events={events} />
      </div>
    </div>
  );
}

export default App;
