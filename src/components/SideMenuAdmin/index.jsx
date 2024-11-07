import PropTypes from "prop-types";
import React from "react";
import logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';
import listLinks from "./menu-list";

import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
// import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

import { Container, ItemContainer, ListLink } from "./styles";

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (

    <Container>
      <img className='img-logo' src={logo} alt='logo-pedidos' />
      {listLinks.map(item => (
        <ItemContainer key={item.id} $isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}> {item.label} </ListLink>
        </ItemContainer>
      ))}

      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <ExitToAppOutlinedIcon style={{ color: ' #fff' }} />
        <ListLink
          to='/login'
          onClick={logout}
          style={{ fontSize: '16px', fontWeight: '400' }}> Sair</ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}

