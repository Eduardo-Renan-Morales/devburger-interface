import styled from "styled-components"

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  width: max-content;

 `
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat( 4, 1fr);
  padding: 10px;
  background-color: #333232;
  border-radius: 20px 20px 0px 0px;
  padding-left: 105px;
  text-align: center;


  p{
    color: #ffffff;
    font-size:16px ;
    left: 100px;
  }

 `
export const Body = styled.div`
   display: grid;
   grid-template-columns: repeat( 5, 1fr);
   padding: 10px;
   width: 834px;
   grid-gap: 10px 15px;

  img{
    border-radius: 10px;
    width: 120px;
  }

  p{
    font-size: 16px;

    .trash {
    position: absolute;
    margin-top: -1px;
    margin-left: 49px;
    cursor: pointer;
    color: #1e1e1e;
    font-size:24px;

    &:hover{
      opacity: 0.7;
    }

    &:active{
      opacity: 0.8;
    }

  }
  }


  .quantity-container{
    display: flex;
    gap: 20px;

    button {
      color: #ffffff;
      height: 34px;
      width: 32px;

      background: #9758A6;
      border: none;
      border-radius: 5px;
      font-size: 24px;
      cursor: pointer;

      &:hover{
      opacity: 0.7;
    }

    &:active{
      opacity: 0.8;
    }
    }
    p{
      margin-top: 5px;
      text-align: center;
    }

  }

 `
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;

`

