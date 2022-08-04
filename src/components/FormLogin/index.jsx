import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Label, Input, HelperText } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FormLogin = ({ setUser }) => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

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
          autoClose: 3000,
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
        toast.error(`${err.response.data.message}!`, {
          position: "top-right",
          autoClose: 3000,
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
        <Input
          {...register("email")}
          type="email"
          placeholder="Digite seu email"
        />
        <HelperText>{errors.email?.message}</HelperText>
        <Label>Senha </Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />
        <HelperText>{errors.password?.message}</HelperText>
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
