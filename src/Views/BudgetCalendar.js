import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Item from "./Item";

function BudgetCalendar() {
  const [date, setDate] = useState(new Date());

  const dateSelection = {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  };

  return (
    <div className="app">
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <Item date={dateSelection} />
    </div>
  );
}

export default BudgetCalendar;
