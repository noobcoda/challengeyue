import styles from "../styles/Main.module.css";
import React, {useState, useEffect} from "react";
import GoalCategory from "../components/GoalCategory";
import Event from "../components/Event";
import MainPageLower from "../components/MainPageLower";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function SignedUp() {
    const {user,authReady} = useContext(AuthContext);
    console.log(user);
    const [addEvent,setAddEvent] = useState(false);
    function showEvent(){
        setAddEvent(addEvent => !addEvent);
    }

    useEffect(()=>{
        if (authReady){
            fetch("/.netlify/functions/auth", user && {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    },[user])

    return (
        <div>
            <GoalCategory />
            <div className={styles.innerEverything}>
                <div className={styles.top_section}>
                <div className={styles.main_title}>
                    <h1>Welcome back,</h1>
                    <h2>{user.user_metadata.full_name}!</h2>
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
