import { formatter } from "../utils/currencyFormatter";
import styles from "./transations.module.css";

export const TransationItem = ({ item }) => {
  const detailsAddictionalClassName =
    item.value >= 0 ? styles.income : styles.expense;

  return (
    <div className={styles.container}>
      <div className={[styles.details, detailsAddictionalClassName].join(" ")}>
        <p className={styles.description}>{item.description}</p>
        <p>{formatter.format(item.value)}</p>
      </div>
      <div className={styles.date}>
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
