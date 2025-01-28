import React, { useState, useEffect, useRef } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // Set initial time
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running
  const intervalRef = useRef(null); // Store the interval ID

  // Start the countdown
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            alert("Time is up");
            clearInterval(intervalRef.current); // Stop the timer when it reaches 0
            setIsRunning(false);
            return 0;
          }
          return prevTime - 2; // Decrement time every second
        });
      }, 1000);
    }
  };

  // Reset the countdown
  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(10); // Reset time to initial value
  };

  // Format time into SS
  const formatTime = (time) => {
    return `${String(time).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime(timeLeft)}</p>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}