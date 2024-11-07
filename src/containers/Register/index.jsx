import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { ErrorMenssage } from '../../components/ErrorMenssage';
import { api } from '..//..//services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';



export function Register() {

  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup
        .string()
        .required('O nome é Obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme a sua senha'),

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

      const { status } =
        await api.post('/users', {
          name: data.name,
          email: data.email,
          password: data.password,
        },
          {
            validateStatus: () => true,
          }
        );

      if (status === 200 || status === 201) {

        setTimeout(() => {
          navigate('/login')
        }, 2000);

        toast.success('Conta criada com Sucesso')
      } else if (status === 400) {
        toast.error('Email já cadastrado! Faça o login para continuar.')
      } else {
        throw new Error();
      }

    } catch (error) {
      toast.error('Ocorreu um erro ao criar a conta. Tente novamente.');
    }
  }

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt='logo-devburger' />
      </LeftContainer>
      <RightContainer>
        <Title> Criar Conta </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <InputContainer>
            <label> Name </label>
            <input type="text" {...register("name")} />
            <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
          </InputContainer>

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

          <InputContainer>
            <label> Confirmar Senha </label>
            <input type="password" {...register("confirmPassword")} />
            <ErrorMenssage>{errors.confirmPassword?.message}</ErrorMenssage>
          </InputContainer>

          <Button type="submit"> Criar conta </Button>
        </Form>
        <p>
          Já possui possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>

    </Container>
  )
}
