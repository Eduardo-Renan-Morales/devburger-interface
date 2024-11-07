import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from "yup";

import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { ErrorMenssage } from '../../components/ErrorMenssage';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title
} from './styles';



export function Login() {
  const navigate = useNavigate();

  const { putUserData } = useUser()

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });

  const onSubmit = async data => {

    try {
      const { data: userData } = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {

          pending: 'Verificando os seus dados',
          success: {
            render() {
              setTimeout(() => {
                if (userData.admin) {
                  navigate('/pedidos')
                } else {
                  navigate('/')
                }
              }, 2000);
              return `Seja Bem-Vindo(a) 👌`
            },
          },
        },
      );

      putUserData(userData)
    }
    catch (error) {
      toast.error(' Email ou senha incorretos 🤯')
    }
  }

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt='logo-devburger' />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span> Dev Burguer! </span>
          <br />
          Acesse com seu <span>Login e senha. </span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label> Email </label>
            <input type="email" {...register("email")} />
            <ErrorMenssage>{errors.email?.message}</ErrorMenssage>
          </InputContainer>

          <InputContainer>
            <label> Senha </label>
            <input type="password" {...register("password")} />
            <ErrorMenssage>{errors.password?.message}</ErrorMenssage>
          </InputContainer>
          <Button type="submit"> Entrar </Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>

    </Container>
  )
}
