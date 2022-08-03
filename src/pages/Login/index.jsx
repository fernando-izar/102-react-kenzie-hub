import { useState, useEffect } from "react";
import { Container } from "./style";
import { Title3 } from "../../styles/typography";
import Form from "../../components/FormLogin";

import Logo from "../../assets/Logo.svg";

const LoginPage = ({ setUser }) => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <main>
        <div className="TitleLogin">
          <Title3>Login</Title3>
        </div>
        <Form setUser={setUser}></Form>
      </main>
    </Container>
  );
};

export default LoginPage;
