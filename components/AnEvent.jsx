import styles from "../styles/MainPageLower.module.css";

export default function AnEvent(props) {
  return (
    <div className={styles.event}>
      <div className={styles.date}>
          <p>JAN</p>
          <p>08</p>
          <p>17:52</p>
      </div>
      <div className={styles.front}>
          <img className={styles.mainImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img>
          <h3 className={styles.name}>Event name</h3>
          <div className={styles.stats}>
              <p className={styles.doers}>539.9k do-ers</p>
              <div className={styles.creators}>
                  <img className={styles.eventImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img>
                  <img className={styles.eventImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img>
                  <img className={styles.eventImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img>
              </div>
          </div>
      </div>
      <div className={styles.back}>
          <div className={styles.description}>
              Description
          </div>
          <div className={styles.buttons}>
              <button className={styles.optionBtn}>
                  <i class="bi bi-book"></i>
                  <span>
                      DETAILS
                  </span>
              </button>
              <button className={styles.optionBtn}>
                  <i class="bi bi-plus-square"></i>
                  <span>
                      JOIN
                  </span>
              </button>
          </div>
          <div className={styles.creator}>
              <button className={styles.followBtn}>Follow</button>
              <img className={styles.eventImg} src="http://unsplash.it/36/36?gravity=center" alt=""></img>
          </div>
      </div>
    </div>
  )
}
