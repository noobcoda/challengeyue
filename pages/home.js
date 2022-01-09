import MyCalendar from '../components/MyCalendar'
import styles from '../styles/Home.module.css'
import MainTask from '../components/MainTask';
import Header from '../components/Header';

export default function home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.cal}>
                <header>
                    <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                    </div>
                    <MyCalendar />
                </header>
            </div>
            {/* <ToDoTimeline />
            <Navigation /> */}
            <div className={styles.eventInp}>
                <div className={styles.subtasks}>
                    <div className={styles.noteHeader}>
                        <div>
                            <b>My Tasks</b>
                        </div>
                    </div>
                    <MainTask />
                </div>
            </div>
        </div>
    )
}
