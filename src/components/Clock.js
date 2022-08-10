import React, { useState, useEffect } from 'react';
import '../css/main.css';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const changeTime = () => setDate(new Date());

  useEffect(() => {
    const timerId = setInterval(changeTime, 1000);

    return () => clearInterval(timerId);
  }, []);
  
  return <div className="clock">{date.toLocaleTimeString()}</div>;
};

// class Clock extends React.Component{
//   constructor(props){
//     super(props)

//     this.state={
//       date: new Date()
//     }

//   }
//   render(){
//     return  <div>{this.state.date.toLocaleTimeString()}</div>
//   }
// }

export default Clock;
