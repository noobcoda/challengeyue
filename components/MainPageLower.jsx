import styles from "../styles/MainPageLower.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AnEvent from "../components/AnEvent.jsx";

export default function MainPageLower() {
    return (
        <div className={styles.all}>
            <h2 className={styles.event_section_title}>
                Currently doing
            </h2>
            <div className={styles.component}>
                <section className={styles.sec}>
                    <AnEvent isCurrent={true}/>
                    <AnEvent isCurrent={true}/>
                    <AnEvent isCurrent={true}/>
                </section>
                <div>
                    <button className={styles.seeMore}>See more</button>
                </div>
            </div>
            <div>
                <h2 className={styles.event_section_title}>
                    You might be interested
                </h2>
                <section className={styles.sec}>
                    <AnEvent isCurrent={false}/>
                    <AnEvent isCurrent={false}/>
                    <AnEvent isCurrent={false}/>
                </section>
                <div>
                    <button className={styles.seeMore}>See more</button>
                </div>
            </div>
            <div>
                <h2 className={styles.event_section_title}>
                    New and rising
                </h2>
                <section className={styles.sec}>
                    <AnEvent isCurrent={false}/>
                    <AnEvent isCurrent={false}/>
                    <AnEvent isCurrent={false}/>
                </section>
                <div>
                    <button className={styles.seeMore}>See more</button>
                </div>
            </div>
        </div>
    )
}