import styles from "../styles/Main.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function NoSignup() {

    const {user, login} = useContext(AuthContext);
    console.log(user);

    return (
        <div className={styles.main_header}>
            <a href="#">
                <img src="" alt="App logo" className={styles.app_logo} />
            </a>
            <div className={styles.menu_icons}>
                <a href="#">
                    <p>Features</p>
                </a>
                <a href="#">
                    <p>Features</p>
                </a>
                <a href="#">
                    <p onClick={login}>Login/Signup</p>
                </a>
            </div>
        </div>
    )
}
