import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { api } from "../../services/api";
import { Container } from "./style";
import { Label, Input, Select } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";

const FormRegister = () => {
  return (
    <Container>
      <form>
        <Label>Nome</Label>
        <Input placeholder="Digite aqui seu nome" />

        <Label>Email</Label>
        <Input placeholder="Digite aqui seu email" />

        <Label>Senha</Label>
        <Input placeholder="Digite aqui sua senha" />

        <Label>Confirmar Senha</Label>
        <Input placeholder="Digite novamente sua senha" />

        <Label>Bio</Label>
        <Input placeholder="Fale sobre você" />

        <Label>Contato</Label>
        <Input placeholder="Opção de contato" />

        <Label>Selecionar módulo</Label>
        <Select>
          <option value="firtModule">Primeiro Módulo</option>
          <option value="secondModule">Segundo Módulo</option>
          <option value="thirdModule">Terceiro Módulo</option>
          <option value="fourthModule">Quarto Módulo</option>
          <option value="fiftyModule">Quinto Módulo</option>
          <option value="sixtyModule">Sexto Módulo</option>
        </Select>

        <MainButton buttonType="negative">Cadastrar</MainButton>
      </form>
    </Container>
  );
};

export default FormRegister;
