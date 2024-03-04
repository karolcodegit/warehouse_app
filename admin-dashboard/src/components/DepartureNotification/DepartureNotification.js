import React, { useEffect, useState } from 'react';
import { ClockIcon } from '../../utils/icons';

const DepartureNotification = ({ departureTime }) => {
  const [timeLeft, setTimeLeft] = useState(Math.floor((departureTime - new Date()) / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-5 rounded">
    <div><ClockIcon /></div>
      <div>Odjazd PILOT za:</div>
      <div className="font-bold">{`${minutes}m ${seconds}s`}</div>
    </div>
  );
};

export default DepartureNotification;