import ReactSelect from 'react-select';
import styled from "styled-components";

export const Container = styled.div`
background-color: #efefef;
min-height: 100vh;

.css-1a7iywq-MuiTableHead-root{
  background: #333232;
  }
  p{
    color: #ffffff;
  }
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStayle = styled(ReactSelect)`
  width: 250px;


  .css-13cymwt-control{
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;

`

export const LinkMenu = styled.button`
  color: #333232;
  cursor: pointer;

 font-weight: ${props => (props.$isActiveStatus ? 'bold' : '400')};
 border: ${props => (props.$isActiveStatus ? '2px solid #FF8C05' : 'none')};
 padding: 5px;
 background: none;
 border-radius: 20px;
`

