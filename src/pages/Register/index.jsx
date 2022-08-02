import { Container } from "./style";
import { Title3 } from "../../styles/typography";
import { HeaderButton } from "../../styles/buttons";
import Form from "../../components/FormRegister";

import Logo from "../../assets/Logo.svg";

const RegisterPage = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo" />
        <HeaderButton>Voltar</HeaderButton>
      </header>
      <main>
        <div>
          <Title3>Crie sua conta</Title3>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <Form />
      </main>
    </Container>
  );
};

export default RegisterPage;
