import styles from "../styles/components/workshop.module.css";
import { WorkshopItem } from "./workshop-item";

export const Workshop = () => {
  return (
    <div className={styles.text_bold}>
      <h1 className={styles.text_size}>Workshop Agenda</h1>
      <p className={styles.text_color}>
        Use this space to provide a short description of the workshop&apos;s
        overall agenda. Explain how <br /> the sequence of topics will help
        attendees achieve their goal.
      </p>
      <div className={styles.display}>
        <div className={styles.display_grid}>
          <div className={styles.circle}>1</div>
          <div className={styles.item_center}>
            <h1 className={styles.text_black}>First Topic</h1>
            <p className={styles.text_color1}>
              Describe a session topic <br /> from your workshop. This <br />
              text supports the general <br /> description above by <br />
              providing more details
            </p>
          </div>
        </div>
        <WorkshopItem />
        <WorkshopItem />
        <WorkshopItem />
        <WorkshopItem />
        <WorkshopItem />
      </div>
    </div>
  );
};
