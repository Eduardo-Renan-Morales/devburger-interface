import styled from "styled-components";

import { Link } from "react-router-dom";
import BackgroudLogin from '../../assets/backgrowd-login-2.svg';
import BannerHamburger from '../../assets/img-cardapio.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)
  ),url('${BackgroudLogin}');
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburger}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

h1 {
  font-family: 'Road Rage', sans-serif;
  font-size: 80px;
  line-height: 65px;
  color: #ffffff;
  position: absolute;

  right: 20%;
  top: 30%;

  span {
  display: block;
  color: #ffffff;
  font-size: 20px;
}}
`
export const BackButton = styled(Link)`
text-decoration: none;
  cursor: pointer;
  background: none;
  color:  #696969;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  position: absolute;
  margin-right: 90%;
  `


export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${props => (props.$isActiveCategory ? ' #9758a6' : '#696969')};
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${props => props.$isActiveCategory && '3px solid #9758a6'};
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px ;
`

export const ProdutsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;

`
