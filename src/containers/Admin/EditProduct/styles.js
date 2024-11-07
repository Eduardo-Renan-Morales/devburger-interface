import styled from "styled-components";
import { Button } from "../../../components/Button";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;

  form{
    background: #363636;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 120px;
  }

`
export const Title = styled.h1`
font-family: "Poppins", sans-serif;
font-size: 40px;
font-weight: 800;
line-height: 48px;
text-align: center;
color: #61A120;

`



export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;

`

export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  margin-bottom: 25px;
  width: 100%;
  padding: 10px;
  min-width: 280px;
`

export const ButtonStyled = styled(Button)`
  margin-top: 25px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`


export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
  gap: 10px;

  input{
    opacity: 0;
    width: 1px;
  }

`
export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-top: 15px;

input{
  width: 15px;
  height: 15px;
  cursor: pointer;
}
`

export const LabelOffer = styled.label`
  color: #ffffff;
`
