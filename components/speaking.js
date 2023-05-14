import styles from "../styles/components/speaking.module.css";

export const Speaking = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who Is Speaking?</h1>
      <div className={styles.flex}>
        <div className={styles.circle}></div>
        <h4 className={styles.text_normal}>ANA LIU</h4>
        <p className={styles.text_color}>Youtube Content Creator</p>
        <div className={styles.line}></div>
        <p className={styles.text_color}>
          Use this space to describe your workshop leaders domain expertise and{" "}
          <br />
          professional qualifications. If relevant, include their experience in
          leading <br /> educational workshops.
        </p>
      </div>
    </div>
  );
};
