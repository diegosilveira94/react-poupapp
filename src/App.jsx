import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Tipography } from "./components/Tipography";
import { DailyBudget } from "./components/DailyBudget/index.jsx";
import { SavingsStatus } from "./components/SavingsStatus";
import styles from "./app.module.css";
import { Transations } from "./components/Transations/index.jsx";
import { AccountList } from "./components/AccountList/index.jsx";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput placeholder="Procure seu dinheiro..." />
          <div>
            <Tipography variant={"h1"}>Olá, Diegão!</Tipography>
            <Tipography variant={"p"}>
              Veja como estão suas finanças hoje.
            </Tipography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={50} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transations />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>
                <AccountList />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
