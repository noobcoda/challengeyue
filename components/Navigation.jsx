import styles from "../styles/Navigation.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navigation() {
    return (
        <div className={styles.body}>
            <div className={styles.nav}>
                <ul>
                    <li className={styles.list}>
                        <span className={styles.icon}>
                            <i class="bi bi-house-fill"></i>
                        </span>
                    </li>
                    <li className={styles.list}>
                        <span className={styles.icon}>
                            <i class="bi bi-search"></i>
                        </span>
                    </li>
                    <li className={styles.list}>
                        <span className={styles.icon}>
                            <i class="bi bi-plus-circle-fill"></i>
                        </span>
                    </li>
                    <li className={styles.list}>
                        <span className={styles.icon}>
                            <i class="bi bi-bookmark-heart-fill"></i>
                        </span>
                    </li>
                    <li className={styles.list}>
                        <span className={styles.icon}>
                            <i class="bi bi-person"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
