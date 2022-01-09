import styles from "../styles/Main.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
    return (
        <div className={styles.main_header}>
            <a href="#">
                <img src="" alt="App logo" className={styles.app_logo} />
            </a>
            {/* <form className={styles.search_bar}>
                <input className={styles.search_input} type="search" placeholder="Search" aria-label="Search" />
                <button type="submit" className={styles.search_btn}>
                    <i class="bi bi-search"></i>
                </button>
            </form> */}
            <div className={styles.menu_icons}>
                <a href="#">
                    <i class="bi bi-bell"></i>
                </a>
                <a href="#">
                    <img className={styles.profileImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img>
                </a>
            </div>
        </div>
    )
}
