import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Update every minute
    () => clearInterval(timer);
  });

  return (
    <div className="px-2 w-[15%] cursor-pointer">
      <span className="pr-2">{String(time.getHours()).padStart(2, '0')}:{String(time.getMinutes()).padStart(2, '0')}</span>
      <span className='pl-2 border-l-2 border-gray-600'>{time.toDateString().substring(0, 10)}</span>
    </div>
  );
};

export default Clock;