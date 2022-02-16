import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  
  const [weekStartDate, setWeekStarDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const changeToLastWeek = () => {
    const msInWeek = 604_800_000;
    setWeekStarDate(new Date(weekStartDate.getTime() - msInWeek));
  }

  const changeToNextWeek = () => {
    const msInWeek = 604_800_000;
    setWeekStarDate(new Date(weekStartDate.getTime() + msInWeek));
  }

  const changeToThisWeek = () => {
    setWeekStarDate(new Date())
  }



  return (
    <>
      <Header
        changeToLastWeek={changeToLastWeek}
        changeToNextWeek={changeToNextWeek}
        changeToThisWeek={changeToThisWeek}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
}




export default App;
