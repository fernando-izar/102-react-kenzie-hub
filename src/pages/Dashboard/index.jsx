import { Container } from "./style";
import { Title3 } from "../../styles/typography";
import { HeaderButton } from "../../styles/buttons";

import Logo from "../../assets/Logo.svg";

const Dashboard = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo" />
        <HeaderButton>Voltar</HeaderButton>
      </header>
      <main>
        <Title3>Olá, Fernando</Title3>
        <p>Primeiro módulo - introdução ao Frontent</p>
      </main>
    </Container>
  );
};

export default Dashboard;
