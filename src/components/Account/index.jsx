import { IconBank } from "../icons";
import { formatter } from "../utils/currencyFormatter";
import styles from "./account.module.css";

export const Account = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bank}>
        <IconBank />
        {item.bank}
      </div>
      <div className={styles.balance}>
        <p className={styles.title}>Saldo</p>
        <p className={styles.value}>{formatter.format(item.balance)}</p>
      </div>
    </div>
  );
};
