import { Button } from "../Button";
import { IconCurrency } from "../icons";
import { TransationItem } from "../TransationItem";
import styles from "./transations.module.css";

export const Transations = () => {
  const items = [
    { description: "iFood", value: -20, date: "2024-10-01T00:00:00-03:00" },
    {
      description: "Papelaria Mila",
      value: -80,
      date: "2024-10-03T00:00:00-03:00",
    },
    {
      description: "Freela (2ª parte)",
      value: 1000,
      date: "2024-10-03T00:00:00-03:00",
    },
    {
      description: "Magazine Luiza",
      value: -300,
      date: "2024-10-05T00:00:00-03:00",
    },
  ];
  return (
    <>
      <ul className={styles.list}>
        {items.map((transations, index) => {
          return (
            <li className={styles.item} key={index}>
              <TransationItem item={transations} />
            </li>
          );
        })}
      </ul>
      <Button>
        <IconCurrency /> Adicionar Transação
      </Button>
    </>
  );
};
