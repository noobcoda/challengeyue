import styles from "../styles/MyEvent.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';

export default function Event(props) {
    const [note,setNote] = useState('');
    const [title,setTitle] = useState("");
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [repeatDay,setRepeatDay] = useState([
        {
            name: "Mon",
            selected: false,
        },
        {
            name: "Tue",
            selected: false,
        },
        {
            name: "Wed",
            selected: false,
        },
        {
            name: "Thu",
            selected: false,
        },
        {
            name: "Fri",
            selected: false,
        },
        {
            name: "Sat",
            selected: false,
        },
        {
            name: "Sun",
            selected: false,
        },
        {
            name: "Month",
            selected: false,
        }
    ]);

    const handleSelectedRepeat = (name) => {
        if (repeatDay){
            const _repeats = repeatDay.map((repeat) => {
                if (repeat.name == name){
                    return {
                        ...repeat,
                        selected: !repeat.selected,
                    }
                }
                return repeat;
            });
            setRepeatDay(_repeats);
        }
    }

    function addImg(event){

        if (event.target.files && event.target.files[0]) {

            if (/image\/*/.test(event.target.files[0].type)){
                const reader = new FileReader();
                console.log("ok");
                
                console.log(reader);
                reader.onload = function() {
                    var new_img = document.createElement("img");
                    var label = document.getElementById("upload_img_label");
                    var modals_pin = document.getElementById("modals_pin");
                    new_img.classList.add("pin_max_width");
                    new_img.src = reader.result;
                    var img_div = document.getElementById("event_img");
                    img_div.appendChild(new_img);
                    new_img.onclick=function(){
                        new_img.parentElement.removeChild(new_img);
                        modals_pin.style.display="none";
                        modals_pin.style.opacity = 0;
                        label.style.display="block";
                    }

                    if (
                        new_img.getBoundingClientRect().width < new_img.parentElement.getBoundingClientRect().width ||
                        new_img.getBoundingClientRect().height < new_img.parentElement.getBoundingClientRect().height
                    ){
                        new_img.classList.remove('pin_max_width');
                        new_img.classList.add('pin_max_height');
                    }

                    //hide the label

                    label.style.display = "none";
                    //display image

                    modals_pin.style.display = "block";
                    modals_pin.style.opacity = 1;
                }
                reader.readAsDataURL(event.target.files[0]);
            }
        }

        document.getElementById("upload_img").value="";
    }

    function showMe(){
        if (props.shouldShow){
            document.getElementById("outside").style.opacity = 1;
            document.getElementById("outside").style.pointerEvents = "all";
        }
    }

    function reset(){
        document.getElementById("outside").style.opacity = 0;
        document.getElementById("outside").style.pointerEvents = "none";

        if(document.getElementById("event_img").hasChildNodes){
            document.getElementById("event_img").innerHTML = "";
        }
        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
        //document.getElementById("allTasks").innerHTML = "";

    }

    return (
        <div>
            {showMe()}
            <div className={styles.outside} id="outside">
                <div className={styles.main}>
                    <div className={`${styles.col} ${styles.one} ${styles.left_side}`}>
                        <div className={styles.sec1} onClick={reset}>
                            <i className="bi bi-x"></i>
                        </div>
                        <div className={styles.sec2}>
                            <label htmlFor="upload_img" className={styles.upload_img_label} id="upload_img_label">
                                <div className={styles.upload_img_container}>
                                    <div className={styles.dotted_border}>
                                        <i className="bi bi-cloud-upload"></i>
                                        <div>Click to upload</div>
                                        <div>Recommendation: Use high-quality .jpg files that are less than 20MB</div>
                                    </div>
                                </div>
                                <input type="file" name="upload_img" id="upload_img" onChange={addImg}/>
                            </label>
                            <div className={styles.modals_pin} id="modals_pin">
                                <div className={styles.event_image} id="event_img">
                                </div>
                            </div>
                        </div>
                        <div className={styles.sec3}>
                            <div className={styles.eventInp}>
                                {/* <div className={styles.title}>
                                    <div className={styles.noteHeader}>
                                        <div>
                                            <b>Time Goal</b>
                                        </div>
                                        <i class="bi bi-pencil-fill"></i>
                                    </div>
                                </div> */}
                                <div className={styles.setTime}>
                                    <form>
                                        <div>
                                            <p>Start: </p>
                                            <input className={styles.timeInp} type="datetime-local" placeholder="select date/time" onChange={(e) => {setStartDate(e.target.value)}}/>
                                        </div>
                                    </form>
                                    <form>
                                        <div>
                                            <p>End: </p>
                                            <input className={styles.timeInp} type="datetime-local" min={startDate} placeholder="select date/time" onChange={(e)=>{setEndDate(e.target.value)}}/>
                                        </div>
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col} ${styles.two} ${styles.right_side}`}>
                        <div className={styles.sec1}>
                            <div className={styles.select_goal}>
                                <select name="pin_goal" id="pin_goal">
                                    <option value="" disabled selected>Select</option>
                                    <option value="first" >First</option>
                                    <option value="second" >Second</option>
                                    <option value="third" >Third</option>
                                </select>
                            </div>
                            <div className={styles.sec1}>
                                <i className="bi bi-check-lg"></i>
                            </div>
                        </div>
                        <div className={styles.sec2}>
                            <div className={styles.eventInp}>
                                <div className={styles.title}>
                                    <div className={styles.noteHeader}>
                                        <input id="title" className={styles.titleInp} placeholder="Create challenge!" onChange={(e)=>{setTitle(e.target.value)}}></input>
                                        <i className="bi bi-pencil-fill"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <div className={styles.eventInp}>
                                <div className={styles.title}>
                                    <div className={styles.noteHeader}>
                                        <div>
                                            <b>Repeat</b>
                                        </div>
                                        <i class="bi bi-pencil-fill"></i>
                                    </div>
                                </div>
                                <div className={styles.weekdayBtns}>
                                    {repeatDay.map(({name,selected}) => (
                                        <div className={`${styles.roundedBtns} ${cs('repeatDay',{'selected':selected})}`}>
                                            <p onClick={()=>{handleSelectedRepeat(`${name}`)}}>{name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                            <div className={styles.note}>
                                <div className={styles.noteHeader}>
                                    <div>
                                        <b>Description</b>
                                    </div>
                                    <i className="bi bi-pencil-fill"></i>
                                </div>
                                <textarea id="note" onChange={event => {
                                    setNote(event.target.value);
                                }} className={styles.event_info_card} placeholder="">{note}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
