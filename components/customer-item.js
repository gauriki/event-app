import styles from "../styles/components/customer.module.css";

export const CustomerItem = () => {
  return (
    <div className={styles.display}>
      <div className={styles.circle}></div>
      <p className={styles.text_color}>
        Experts or previous participants <br /> provide public-facing quotes{" "}
        <br /> here.
      </p>
      <div className={styles.line}></div>
      <h3 className={styles.text_normal}>JOHAN BAILY</h3>
      <p className={styles.text_size}>Product Designer at MoqupS</p>
    </div>
  );
};
