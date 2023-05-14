import styles from "../styles/components/application.module.css";

export const Application = () => {
  return (
    <div className={styles.display_column}>
      <h1 className={styles.text_black}>Fee and Application</h1>
      <h2 className={styles.text_gray}>
        $300 - Applications before Jan. 30, 2021 <br />
        $450 -Applications after Jan. 30, 2021
      </h2>
      <div className={styles.buttons}>
        <input
          type="email"
          className={styles.input_decor}
          placeholder="Email Address"
        />
        <input type="text" className={styles.input_decor} placeholder="Name" />
        <input
          type="number"
          className={styles.input_decor}
          placeholder="Phone Number"
        />
        <button className={styles.btn_bg}>SIGN UP</button>
      </div>
      <p className={styles.font_size}>
        In order to register, you must pay the enrolment fee at the time of
        application.
      </p>
      <p className={styles.font_size}>
        Once registered, you&apos ll receive a confirmation email with
        additional details about the workshop.
      </p>
      <p className={styles.font_size}>
        Enrolment for this workshop is limited to 20 participants.
      </p>
    </div>
  );
};
