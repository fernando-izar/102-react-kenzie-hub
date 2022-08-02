import { Container } from "./style";
import { Label, Input } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";

const FormLogin = () => {
  return (
    <Container>
      <form>
        <Label>Email</Label>
        <Input placeholder="Digit seu email" />
        <Label>Senha</Label>
        <Input placeholder="Digite sua senha" />
        <MainButton buttonType="primary">Entrar</MainButton>
        <div>
          <p>Ainda não posui uma conta?</p>
          <MainButton buttonType="disable">Cadastre-se</MainButton>
        </div>
      </form>
    </Container>
  );
};

export default FormLogin;
