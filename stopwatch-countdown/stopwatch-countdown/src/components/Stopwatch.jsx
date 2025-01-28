import React, { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0); // Track elapsed time
  const [isRunning, setIsRunning] = useState(false); // Track if the stopwatch is running
  const intervalRef = useRef(null); // Store the interval ID

  // Start the stopwatch
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => { 
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    }
  };

  // Stop the stopwatch
  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current); // Clear the interval
      setIsRunning(false);
    }
  };

  // Reset the stopwatch
  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0); // Reset time to 0
  };

  // Format time into MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}