import { Container } from "./style";
import { Headline, Title3 } from "../../styles/typography";
import { HeaderButton } from "../../styles/buttons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Logo from "../../assets/Logo.svg";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo" />
        <HeaderButton onClick={logout}>Sair</HeaderButton>
      </header>
      <main>
        <Title3>Olá, {user.data.user.name}</Title3>
        <Headline>{user.data.user.course_module}</Headline>
      </main>
    </Container>
  );
};

export default Dashboard;
