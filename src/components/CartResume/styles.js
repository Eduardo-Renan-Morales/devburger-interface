import styled from "styled-components"

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  width: max-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

 `

export const Header = styled.div`
  padding: 10px;
  background-color: #333232;
  border-radius: 20px 20px 0px 0px;
  text-align: center;

  p{
    color: #ffffff;
    font-size:16px ;
    left: 100px;
  }

 `
export const Body = styled.div`

  display: grid;
  margin-bottom: 493px;
  padding: 15px;
  grid-gap: 10px 50px;
  grid-template-areas:
    'items items-price'
    'delivery-tax delivery-tax-tax';

.items{
  grid-area: items;
}
.items-price{
  grid-area: items-price;
}
.delivery-tax{
  grid-area: delivery-tax;
}
.delivery-tax-tax{
  grid-area: delivery-tax-tax;
}

p{
  color: #828282;


}
`


export const BottomPart = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 font-size: 24px;
 padding: 15px;

`

