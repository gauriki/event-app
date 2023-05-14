import styles from "../styles/components/main.module.css";

export const Main = () => {
  return (
    <main className={styles.main_content}>
      <h1 className={styles.font_bold}>Design Workshop: </h1>
      <h1 className={styles.font_bold}> Create a Perfect Web Page</h1>
      <p className={styles.font_normal}>
        March 30-31 / Mariahilfer Strasse 34, Vienna, Austria{" "}
      </p>
      <p className={styles.font_normal}>9:00-14:00</p>
      <div className={styles.button_container}>
        <button className={styles.black_btn}>REGISTER</button>
        <button className={styles.white_btn}>LEARN MORE</button>
      </div>
    </main>
  );
};
