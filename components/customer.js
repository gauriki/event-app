import styles from "../styles/components/customer.module.css";
import { CustomerItem } from "./customer-item";

export const Customer = () => {
  return (
    <div className={styles.display_flex}>
      <h1 className={styles.text_bold}>What Our Customers Say?</h1>
      <div className={styles.flex_container}>
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
      </div>
    </div>
  );
};
