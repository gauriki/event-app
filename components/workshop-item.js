import styles from "../styles/components/workshop.module.css";

export const WorkshopItem = () => {
  return (
    <div className={styles.display_grid}>
      <div className={styles.circle}>1</div>
      <div className={styles.item_center}>
        <h1 className={styles.text_black}>First Topic</h1>
        <p className={styles.text_color1}>
          Describe a session topic <br /> from your workshop. This <br /> text
          supports the general <br /> description above by <br /> providing more
          details
        </p>
      </div>
    </div>
  );
};
