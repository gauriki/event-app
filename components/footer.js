import styles from "../styles/components/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer_content}>
      <h1 className={styles.font_bold}>moqups</h1>
      <p className={styles.font_normal}>@Copyright 2019</p>
    </footer>
  );
};
