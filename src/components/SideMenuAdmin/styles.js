import { Link } from 'react-router-dom'
import styled from "styled-components"


export const Container = styled.div`
  background: #363636;
  width: 350px;
  position: relative;

  .img-logo{
  position: relative;
  width: 180px;
  height: 165.44px;
  margin:  30px 0 50px 50px  ;
  }

  .icon{
    color: #fff;
    font-size: 28px;
    margin-left: 8px;
  }



 `

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => props.$isActive ? '#9758A6' : 'none'};
  border-radius: 2px;
  margin: 8px;

`

export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 10px;

 `
