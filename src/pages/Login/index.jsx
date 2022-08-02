import { Container } from "./style";
import { Title3 } from "../../styles/typography";
import Form from "../../components/FormLogin";

import Logo from "../../assets/Logo.svg";

const LoginPage = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <main>
        <div className="TitleLogin">
          <Title3>Login</Title3>
        </div>
        <Form></Form>
      </main>
    </Container>
  );
};

export default LoginPage;
