import { Account } from "../Account";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import styles from "./accountlist.module.css";

export const AccountList = () => {
  const accountList = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
  ];

  return (
    <>
      <ul className={styles.list}>
        {accountList.map((account, index) => {
          return (
            <li className={styles.item} key={index}>
              <Account item={account} />
            </li>
          );
        })}
      </ul>
      <Button>
        <IconWallet /> Adicionar Conta
      </Button>
    </>
  );
};
