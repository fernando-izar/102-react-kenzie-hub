import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

import { Container } from "./style";
import { Label, Input, Select, HelperText } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";

const FormRegister = () => {
  const navigate = useNavigate();

  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/gm,
        "Deve conter e dígitos, ao menos uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
    pwdCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha deve ser confirmada"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato necessário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const onSubmitFunction = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const data = { email, password, name, bio, contact, course_module };
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Sucess!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/login");
        /*redirecionar para página de login */
      })
      .catch((err) => {
        toast.error("Erro!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err);
        //mostrar toast de falha no cadastro
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Label>Nome</Label>
        <Input
          {...register("name")}
          type="text"
          placeholder="Digite aqui seu nome"
        />
        <HelperText>{errors.name?.message}</HelperText>

        <Label>Email</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="Digite aqui seu email"
        />
        <HelperText>{errors.email?.message}</HelperText>

        <Label>Senha</Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="Digite aqui sua senha"
        />
        <HelperText>{errors.password?.message}</HelperText>

        <Label>Confirmar Senha</Label>
        <Input
          {...register("pwdCheck")}
          type="password"
          placeholder="Digite novamente sua senha"
        />
        <HelperText>{errors.pwdCheck?.message}</HelperText>

        <Label>Bio</Label>
        <Input {...register("bio")} type="text" placeholder="Fale sobre você" />
        <HelperText>{errors.bio?.message}</HelperText>

        <Label>Contato</Label>
        <Input
          {...register("contact")}
          type="text"
          placeholder="Opção de contato"
        />
        <HelperText>{errors.contact?.message}</HelperText>

        <Label>Selecionar módulo</Label>
        <Select {...register("course_module")}>
          <option value="1o Módulo">Primeiro Módulo</option>
          <option value="2o Módulo">Segundo Módulo</option>
          <option value="3o Módulo">Terceiro Módulo</option>
          <option value="4o Módulo">Quarto Módulo</option>
          <option value="5o Módulo">Quinto Módulo</option>
          <option value="6o Módulo">Sexto Módulo</option>
        </Select>

        <MainButton type="submit" buttonType="negative">
          Cadastrar
        </MainButton>
      </form>
    </Container>
  );
};

export default FormRegister;
