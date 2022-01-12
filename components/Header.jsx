import styles from "../styles/Main.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Header() {
    const {user, login, logout,authReady} = useContext(AuthContext);
    console.log(user);

    return (
        <div className={styles.main_header}>
            <a href="#">
                <img src="" alt="App logo" className={styles.app_logo} />
            </a>
            {/* {authReady && ( */}
                <div>
                    <div className={styles.menu_icons}>
                        {!user && <a href="#"><p>Features</p></a>}
                        {!user && <a href="#"><p onClick={login}>Login/Signup</p></a>}
                        {user && <a href="#"><i className="bi bi-bell"></i></a>}
                        {user && <a href="#"><img className={styles.profileImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img></a>}
                        {user && <a href="#"><p onClick={logout}>Log out</p></a>}
                    </div>
                </div>
                {/* )
            } */}
        </div>
    )
}
