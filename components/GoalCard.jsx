import styles from "../styles/GoalCard.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function GoalCard() {
    return (
        <div class={styles.card}>
            <div className={styles.header}>
                <div className={styles.title}>Task title</div>
                <div>17:29</div>
            </div>
            <div className={styles.body}>
                <div className={styles.gridContainer}>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                    <div></div>
                </div>
            </div>
            <div className={styles.footer}>
                <div>Progress circle</div>
            </div>
        </div>
    )
}
