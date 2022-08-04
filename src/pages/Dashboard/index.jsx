import { Container } from "./style";
import { Title1, Title3, Headline } from "../../styles/typography";
import { HeaderButton } from "../../styles/buttons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import Logo from "../../assets/Logo.svg";

const Dashboard = ({ user }) => {
  const [userLoged, setUserLoged] = useState(null);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    console.log(userId);
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setUserLoged(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="div-header">
        <header>
          <img src={Logo} alt="Logo" />
          <HeaderButton onClick={logout}>Sair</HeaderButton>
        </header>
      </div>

      {userLoged ? (
        <>
          <div className="div-main">
            <main>
              <Title3>Olá, {userLoged.data.name}</Title3>
              <Headline>{userLoged.data.course_module}</Headline>
            </main>
          </div>

          <div className="container-techs">
            <div className="techs">
              <Headline>Que pena! Estamos em desenvolvimento :(</Headline>
              <Headline>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </Headline>
            </div>
          </div>
        </>
      ) : (
        <div className="div-main">
          <main>
            <Title1>...Loading</Title1>
          </main>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
