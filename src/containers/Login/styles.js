import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

import BackgroudLogin2 from '../../assets/backgrowd-login-2.svg';
import BackgroudLogin from '../../assets/backgrowd-login.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
export const LeftContainer = styled.div`
  background: url('${BackgroudLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

img {
  width: 65%;
}
`
export const RightContainer = styled.div`
background: url('${BackgroudLogin2}');
background-color: #1e1e1e;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  height: 100%;
  width: 100%;
  max-width: 50%;

  p{
  color: #fff;
  font-size: 18px;
  font-weight: 800;

  a{
    text-decoration: underline;
  }

  }
`
export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
color: white;

span {
  color: #9758a6;
  font-family: "Road Rage", sans-serif;
}

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label{
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    }

    `

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
    `

