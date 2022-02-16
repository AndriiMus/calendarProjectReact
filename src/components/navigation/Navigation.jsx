import React from 'react';

import { days } from '../../utils/dateUtils.js';

import isTodayDate from './isTodayDate.js';

const Navigation = ({ weekDates }) => {


  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
         const getDate = dayDate.getDate();

        return(
          <div className="calendar__day-label day-label">
            <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
            <span className={isTodayDate(getDate)}>{getDate}</span>
          </div>
        )
      }
      )}
    </header>
  );
};

export default Navigation;
