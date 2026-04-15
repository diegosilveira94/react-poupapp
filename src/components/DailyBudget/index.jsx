import { formatter } from "../utils/currencyFormatter";
import styles from "./dailybudget.module.css";

export const DailyBudget = ({ value }) => {
  return <p className={styles.dailybudget}>{formatter.format(value)}</p>;
};
