import styles from "../styles/components/contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact_content}>
      <h1 className={styles.text_bold}>Contact Us</h1>
      <p className={styles.text_normal}>
        Dedicate this space to your team&apos;s contact information – including
        phone number, email, or <br /> address.
      </p>
      <div className={styles.icon}>
        <div className={styles.bg_white}>
          <svg
            className={styles.icon_size}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </div>
        <div className={styles.bg_white}>
          <svg
            className={styles.icon_size}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
