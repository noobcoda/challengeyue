import React, {useState} from "react";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
import styles from "../styles/MyCalendar.module.css";

export default function MyCalendar() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <div className={styles.cal}>
            <Calendar 
            val={dateState}
            onChange={changeDate}
            className="react-calendar"
            minDate={new Date()}
            />
        </div>
    )
}
