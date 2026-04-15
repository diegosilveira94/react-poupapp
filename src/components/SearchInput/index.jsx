import { IconSearch } from "../icons";
import styles from "./searchInput.module.css";

export const SearchInput = (props) => {
  return (
    <div className={styles.container}>
      <IconSearch />
      <input className={styles.input} {...props} />
    </div>
  );
};
