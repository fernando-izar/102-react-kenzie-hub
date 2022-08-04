import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Label, Input } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const FormLogin = ({ setUser }) => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        setUser(res);
        console.log(res.data.user.name);
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        return res;
      })
      .then((res) => {
        toast.success("Sucess!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return res;
      })
      .then((res) => navigate("/dashboard"))
      .catch((err) => {
        console.log(err.response.data.message[0]);
        toast.error("Error! Email ou senha incorretos!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Label>Email </Label>
        <Input {...register("email")} placeholder="Digite seu email" />
        <Label>Senha </Label>
        <Input {...register("password")} placeholder="Digite sua senha" />
        <MainButton buttonType="primary">Entrar</MainButton>
        <div>
          <p>Ainda não posui uma conta?</p>
          <Link to="/register">
            <MainButton type="submit" buttonType="disable">
              Cadastre-se
            </MainButton>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default FormLogin;
