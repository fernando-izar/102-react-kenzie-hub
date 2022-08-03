import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { Title3 } from "../../styles/typography";
import { HeaderButton } from "../../styles/buttons";
import Form from "../../components/FormRegister";

import Logo from "../../assets/Logo.svg";

const RegisterPage = ({ data, setData }) => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo" />
        <Link to="/login">
          <HeaderButton>Voltar</HeaderButton>
        </Link>
      </header>
      <main>
        <div>
          <Title3>Crie sua conta</Title3>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <Form data="data" setData="setData" />
      </main>
    </Container>
  );
};

export default RegisterPage;
