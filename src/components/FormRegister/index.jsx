import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import { api } from "../../services/api";
import { Container } from "./style";
import { Label, InputTheme, Select, HelperText } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";

const FormRegister = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const handleEyeState = (e) => {
    e.preventDefault();
    setIsEyeOpen((oldState) => !oldState);
  };

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Za-z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/gm,
        "Mínimo de 8 digitos com, ao menos, uma letra, um número e um símbolo(!@#$&%*)"
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
    api
      .post("/users", data)
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
        navigate("/login");
      })
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
        console.log(err);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Label>Nome</Label>
        <InputTheme
          {...register("name")}
          type="text"
          placeholder="Digite aqui seu nome"
        />
        <HelperText>{errors.name?.message}</HelperText>

        <Label>Email</Label>
        <InputTheme
          {...register("email")}
          type="email"
          placeholder="Digite aqui seu email"
        />
        <HelperText>{errors.email?.message}</HelperText>

        <Label>Senha</Label>
        <div className="eye-control">
          <InputTheme
            {...register("password")}
            type={isEyeOpen ? "text" : "password"}
            placeholder="Digite aqui sua senha"
          />
          <button
            style={{ color: "#fffff" }}
            className="eye"
            onClick={handleEyeState}
          >
            <BsFillEyeFill
              style={{ display: isEyeOpen ? "flex" : "none", color: "#868E96" }}
            />
            <BsFillEyeSlashFill
              style={{ display: isEyeOpen ? "none" : "flex", color: "#868E96" }}
            />
          </button>
        </div>

        <HelperText>{errors.password?.message}</HelperText>

        <Label>Confirmar Senha</Label>
        <InputTheme
          {...register("pwdCheck")}
          type="password"
          placeholder="Digite novamente sua senha"
        />
        <HelperText>{errors.pwdCheck?.message}</HelperText>

        <Label>Bio</Label>
        <InputTheme
          {...register("bio")}
          type="text"
          placeholder="Fale sobre você"
        />
        <HelperText>{errors.bio?.message}</HelperText>

        <Label>Contato</Label>
        <InputTheme
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
