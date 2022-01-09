//is passed in props, if from "add", passed in default

//https://medium.com/swlh/dynamic-pre-rendering-with-react-and-next-39d14dd23987
import styles from "../styles/Add.module.css";
import React, { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from "react-date-range";


export default function EditGoal({goalData}){
    const [title, setTitle] = useState("Title");
    const [why, setWhy] = useState("Your 'why'");
    const [image,setImg] = useState("https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDeadline,setIsDeadline] = useState(false);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    function setDetails(toChange,newVal){
        if (toChange == "title"){
            setTitle(newVal);
        } else if (toChange == "why") {
            setWhy(newVal);
        } else if (toChange == "image") {
            setImg(newVal);
        }
    }

    function onDeadline(){
        setIsDeadline(true);
    }

    const updateGoal = async(isDefault) => {
        const response = await fetch('/api/goals',{
            method: "POST",
            body: JSON.stringify({
                title: title,
                why: why,
                image: image,
                isNew: isDefault,
                isDeadline: isDeadline,
                startDate: startDate,
                deadline: endDate,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const updateImg = async() => {

    }

    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.text}>
                    <img className={styles.goalImg}
                    src={goalData.default ? image : `${goalData.imgSrc}`}
                    alt="Um"
                    >
                    </img>
                    <input type="text" onChange={(e)=> setDetails("title",e.target.value)} className={`${styles.input} ${styles.title}`} value={goalData.default ? title:`${goalData.title}`}></input>
                    <input type="text" onChange={(e)=> setDetails("why",e.target.value)} className={styles.input} value={goalData.default ?  why : `${goalData.why}`}></input>
                    <a onClick={onDeadline} className={`${styles.btn} ${styles.btn1}`}>Add a deadline </a>
                    {isDeadline && (
                        <div id="datepicker" className="flex flex-col flex-grow col-span-3 mx-auto ">
                            <DateRangePicker 
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={["#a9d4ff"]}
                                onChange={handleSelect}
                            />
                        </div>
                    )}
                    <a onClick={updateGoal(goalData.default)} className={`${styles.btn} ${styles.btn2}`}>{goalData.default ? 'Submit':'Save'}</a>
                </div>
            </div>
        </div>
    )
}

