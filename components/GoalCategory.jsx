import styles from "../styles/Main.module.css";

export default function GoalCategory() {
    return (
        <div className={styles.categories}>
            <section className={styles.category_section}>
                <button className={`${styles.category} ${styles.active}`}>All</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>
                <button className={styles.category}>Goal</button>


            </section>
        </div>
    )
}
