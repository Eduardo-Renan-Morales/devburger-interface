import React from "react";
import { useLocation } from "react-router-dom";
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import paths from "../../constants/paths";
import EditProduct from "./EditProduct";
import ListProducts from "./ListProducts";
import NewProduct from "./NewProduct";
import Orders from "./Orders";
import { Container, ContainerItems } from "./styles";

export function Admin() {
  const { pathname } = useLocation();



  return (
    <Container>
      <SideMenuAdmin path={pathname} />
      <ContainerItems>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Products && <ListProducts />}
        {pathname === paths.NewProducts && <NewProduct />}
        {pathname === paths.EditProduct && <EditProduct />}

      </ContainerItems>
    </Container>
  );
}
