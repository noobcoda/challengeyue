import styles from "../styles/MakeEvent.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState} from "react";

export default function makeevent() {
    //these are default values
    //but on load, we also check the event id (if event already made and they r just editing/checkboxing)
    //if we have event id, we set the default values to the ones in the database

    const[startTime,setStartTime] = useState(new Date().getTime());
    const[endTime,setEndTime] = useState(new Date().getTime());
    const[eventTitle,setEventTitle] = useState('Main Task');
    const[goals,setGoals] = useState([]);
    const[note,setNote] = useState('');
    const[subtasks,setSubtasks] = useState([]);
    const[val,setVal] = useState("");

     /* https://www.freecodecamp.org/news/create-a-solid-to-do-app-with-react/
     */


    function changeTime(isStart,newTime){
        if (isStart){
            setStartTime(newTime);
        } else {
            //have to check if the end time > start time
            if (newTime < startTime){
                setEndTime(startTime);
                setStartTime(newTime);
            } else {
                setEndTime(newTime);
            }
            console.log("Start: " + startTime);
            console.log("End: " + endTime);
            document.getElementById("start").value = startTime;
            document.getElementById("end").value = endTime;
        }
    }


    function handleAdd(k,v){
        //setSubtasks(new Map(subtasks.set(k,v)));
        document.getElementById("addBtn").style.display="block";
        const subtask = {
            id: k,
            text: v,
            completed: false,
        };
        const testArr = [...subtasks].filter(sub => sub.id !== k);
        if (testArr.length == 0){
            //we add
            const newSubtasks = [subtask, ...subtasks];
            setSubtasks(newSubtasks);
            console.log(subtask, ...subtasks);
        } else {
            //we update
            setSubtasks(prev => prev.map(item => item.id == k ? subtask:item))
        } 
    }

    function handleAddPressed(){
        if (document.getElementById("editor").childElementCount == 1 || !(document.getElementById("editor").lastChild.getElementsByClassName("subtaskInp")[0].value == "")){
            let newSubtask = document.createElement("div");
            newSubtask.className=`${styles.newSubtask}`;
            newSubtask.id = Math.floor(Math.random() * 10000);
            handleAdd(newSubtask.id,'');
            document.getElementById("addBtn").style.display="none";
            let newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.className = `${styles.checkbox}`;
            let newSubtaskInp = document.createElement("textarea");
            newSubtaskInp.className = "subtaskInp";
            newSubtaskInp.onchange="updateVal()";
            newSubtaskInp.value=`${val}`;
            let deleteIcon = document.createElement("a");
            deleteIcon.innerHTML = '<i class="bi bi-trash-fill"></i>';
            deleteIcon.className = `${styles.deleteIcon}`;
            let addIcon = document.createElement("a");
            addIcon.innerHTML = '<i class="bi bi-plus-circle" onClick={handleAddPressed}></i>';
            let editIcon = document.createElement("a");
            editIcon.innerHTML = '<i class="bi bi-pencil-square"></i>';
            let saveIcon = document.createElement("a");
            saveIcon.innerHTML = '<i class="bi bi-check"></i>';
            newSubtask.appendChild(newCheckbox);
            newSubtask.appendChild(newSubtaskInp);

            newSubtask.appendChild(saveIcon);
            document.getElementById("editor").appendChild(newSubtask);
            deleteIcon.onclick=function(){
                handleDeletion(newSubtask,newSubtask.id);
            };
            saveIcon.onclick=function(){
                handleAdd(newSubtask.id,newSubtaskInp.value);
                newSubtask.removeChild(this);
                newSubtask.appendChild(deleteIcon);
                newSubtask.prepend(newCheckbox);
                //also get rid of outline 
                newSubtask.append(editIcon);
                
            }
            editIcon.onclick=function(){
                newSubtask.removeChild(deleteIcon);
                newSubtask.removeChild(this);
                newSubtask.appendChild(saveIcon);
            }
        }
    }

    function updateEvent(){
        //change the schema and stuff
        
    }

    function updateVal(e){
        setVal(e.target.value);
    }

    function handleDeletion(theDiv,id) {
        const removeArr = [...subtasks].filter(subtask => subtask.id !== id);
        setSubtasks(removeArr);
        document.getElementById("editor").removeChild(theDiv);
    }

    //https://stackoverflow.com/questions/2099661/enter-key-in-textarea
   //checkbox https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
   //https://stackoverflow.com/questions/58131183/javascript-html-creating-new-checkbox-option-everytime-user-enters-item-in-t?rq=1 
   
   //in last div, must load up everything from database
   return (
        <div className={styles.makeEvent}>
            <div className={styles.innerCard}>
                <div className={styles.headerBtns}>
                    <i class="bi bi-x"></i>
                    <i onclick="updateEvent()" class="bi bi-check2"></i>
                </div>
                <div className={styles.titleArea}>
                    <h1>{eventTitle}</h1>
                </div>
                <div className={styles.formSection}>
                    <div className={styles.each}>
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <input onChange = {(e) => setEventTitle(e.target.value)} placeholder="Main Task" />
                    </div>
                    <div className={styles.each}>
                        <i class="bi bi-clock-fill"></i>
                        <div className={styles.timeSlot}>
                            <input id="start" min={new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:false})} class="input-time" type="time" onChange={(e)=> changeTime(true,e.target.value)}/>
                            <input id="end" min={new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:false})} class="input-time" type="time" onChange={(e)=> changeTime(true,e.target.value)} class="input-time" type="time" onChange={(e)=> changeTime(false,e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.each}>
                        <i class="bi bi-bullseye"></i>
                        <textarea cols= "100" className={styles.goalInput} placeholder="Which goal(s) does this event relate to?"></textarea>
                    </div>
                    <div className={styles.each}>
                        <i class="bi bi-pen-fill"></i>
                        <textarea value = {note} onChange = {(e) => setNote(e.target.value)} className={styles.goalInput} placeholder="Add a note! They could be reminders, or a motivating comment."></textarea>
                    </div>
                    <div className={styles.each}>
                        <i class="bi bi-card-checklist"></i>
                        <div id="editor" className={styles.goalInput}>
                            <i id = "addBtn" class="bi bi-plus-circle" onClick={handleAddPressed}></i>
                        </div>
                    </div>
                    <div className={styles.each}>
                        <i class="bi bi-bell-fill"></i>
                        <div className={styles.weekdayBtns}>
                            <div className={styles.roundedBtns}>
                                <p>M</p>
                            </div>
                            <div className={styles.roundedBtns}>
                                <p>T</p>
                            </div>
                            <div className={styles.roundedBtns}>
                                <p>W</p>
                            </div>
                            <div className={styles.roundedBtns}>
                                <p>T</p>
                            </div >
                            <div className={styles.roundedBtns}>
                                <p>F</p>
                            </div>
                            <div className={styles.roundedBtns}>
                                <p>S</p>
                            </div>
                            <div className={styles.roundedBtns}>
                                <p>S</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
