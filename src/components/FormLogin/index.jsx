import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";
import { Container } from "./style";
import { Label, InputTheme, HelperText } from "../../styles/inputs";
import { MainButton } from "../../styles/buttons";

const FormLogin = ({ setUser }) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const handleEyeState = (e) => {
    e.preventDefault();
    setIsEyeOpen((oldState) => !oldState);
  };

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm(
    { defaultValues: { email: "", password: "" } },
    { resolver: yupResolver(formSchema) }
  );

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [formState, isSubmitSuccessful, reset]);

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        setUser(res);
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
        <InputTheme
          {...register("email")}
          type="email"
          placeholder="Digite seu email"
        />
        <HelperText>{errors.email?.message}</HelperText>

        <Label>Senha </Label>
        <div className="eye-control">
          <InputTheme
            {...register("password")}
            type={isEyeOpen ? "text" : "password"}
            placeholder="Digite sua senha"
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
