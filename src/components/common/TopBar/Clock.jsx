import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Update every minute
    () => clearInterval(timer);
  });

  return (
    <div className="px-2 w-[15%]">
      <span className="pr-2">{time.getHours()}:{time.getMinutes()}</span>
      <span className='pl-2 border-l-2 border-gray-600'>{time.toDateString().substring(0, 10)}</span>
    </div>
  );
};

export default Clock;