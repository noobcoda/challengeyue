import styles from "../styles/Main.module.css";
import React, {useState} from "react";
import Header from "../components/Header";
import GoalCategory from "../components/GoalCategory";
import Event from "../components/Event";
import MainPageLower from "../components/MainPageLower";
export default function SignedUp() {
    const [addEvent,setAddEvent] = useState(false);
    function showEvent(){
        setAddEvent(addEvent => !addEvent);
    }
    return (
        <div>
            <Header />
            <GoalCategory />
            <div className={styles.innerEverything}>
                <div className={styles.top_section}>
                <div className={styles.main_title}>
                    <h1>Welcome back,</h1>
                    <h2>Yuena!</h2>
                </div>
                <button onClick={showEvent} className={`${styles.category} ${styles.add_event}`}>Create challenge</button>
                </div>
                <Event shouldShow={addEvent}/>
                <div className={styles.bottom}>
                <MainPageLower />
                </div>
            </div>
        </div>
    )
}
