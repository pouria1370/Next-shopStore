import React, { useEffect, useRef, useState } from 'react'

const Timer = ({dayOff,hoursOff,minutesOff,tag}) => {

  const [timer,setTimer] = useState(0)
  const TimerSettimeOut = useRef(false)
  const [date, setDate] = useState({
    days: dayOff ?? 0,
    hours : hoursOff ?? 0,
    minutes : minutesOff ?? 0,
    seconds : 0
  })
  
  if (timer === 0 && !TimerSettimeOut.current) {
    
    const seconds = +date.days * 24 * 60 * 60 + +date.hours * 60 * 60 + +date.minutes * 60;
    setTimer(seconds);
  }
  if (timer === 0 && TimerSettimeOut.current) {
    clearInterval(TimerSettimeOut.current);
  }

  useEffect(() => {
    
      const timerFunction = () => {
        setTimer(prevState => prevState - 1)
      };
      TimerSettimeOut.current = setInterval(timerFunction, 1000);

      TimerSettimeOut.current;

    return () => {
    clearInterval(TimerSettimeOut.current);
    };
  }, []);

  useEffect(() => {
    const days = Math.floor(timer/(24 * 60 * 60));
    const hours = Math.floor((timer-days*(24 * 60 * 60))/(60 * 60)) ;
    const minutes = Math.floor((timer - days*(24 * 60 * 60) - hours*(60*60))/60);
    const seconds = Math.floor((timer - days*(24 * 60 * 60) - hours*(60*60) - minutes*60))
  setDate({
    days,
    hours,
    minutes,
    seconds
  })
  }, [timer])
  
  return (
    timer != 0 && (
      <>
        <div
          dir="ltr"
          className="font-vazir-adad flex justify-between text-danger px-5 pt-3 whitespace-pre"
        >
          {date.days != 0 && (
            <div className="rounded-full inline-block w-[30px] h-[30px] text-center align-text-top text-dark bg-warning">
              {date.days}d
            </div>
          )}
          {date.days === 0 && (
            <div>
              {date.hours}:{date.minutes}:{date.seconds}
            </div>
          )}
          <span className="font-vazir text-danger">{tag}</span>
        </div>
        <div className="h-[3px] mt-3 w-full bg-danger"></div>
      </>
    )
  );
  
}

export default Timer