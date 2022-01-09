import styles from "../styles/ToDoTimeline.module.css";
import GoalCard from "./GoalCard";
export default function ToDoTimeline() {
    return (
        <div class={styles.container}>
            <ul>
                <li>
                    <span></span>
                    <GoalCard />
                </li>
                <li>
                    <span></span>
                    Hi2
                </li>
                <li>
                    <span></span>
                    Hi3
                </li>
            </ul>
        </div>
    )
}
