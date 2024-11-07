import styled from "styled-components";
import BackgroudLogin from '../../assets/backgrowd-login-2.svg';
import texture from '../../assets/texture.jpg';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)
  ),url('${BackgroudLogin}');
  min-height: 100vh;

  .arrow-back{
    font-size: 28px;
    margin-left: 53px;
    font-weight: bold;
    cursor: pointer;
    background-color: #9758a6 ;
    color: #ffffff;
    border-radius: 5px;
  }

`
export const Banner = styled.div`
  background: url('${texture}');
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img{
     height: 130px;
  }
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;
  margin-top: 20px;

  &::after{
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;

  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 40px;
  width: 100%;
  min-width: 1280px;
  padding: 40px;
  margin: 0 auto;

`

