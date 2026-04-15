import styles from "./aside.module.css";
import logo from "./../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="logo" />
      <footer className={styles.footer}>
        Desenvolvido por Diego Sileira. Projeto acadêmico sem fins comerciais.
      </footer>
    </aside>
  );
};
