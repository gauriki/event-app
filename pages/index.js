import { Application } from "../components/application";
import { Contact } from "../components/contact";
import { Customer } from "../components/customer";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Speaking } from "../components/speaking";
import { Workshop } from "../components/workshop";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Workshop />
      <Customer />
      <Application />
      <Speaking />
      <Contact />
      <Footer />
    </div>
  );
}
