import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { api } from '../../../services/api';

// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import formateDate from "../../../utils/formatDate";
import status from "./orders-status";
import Row from "./row";
import { Container, LinkMenu, Menu } from "./styles";


function Orders() {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('/orders');

        setOrders(data);
        setFilteredOrders(data)
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    }
    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formateDate(order.createdAt),
      status: order.status,
      products: order.products

    }
  }
  useEffect(() => {
    const newRows = filteredOrders.map(ord => createData(ord))

    setRows(newRows)
  }, [filteredOrders]);

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter(order => order.status === status[statusIndex].value)

      setFilteredOrders(newFilteredOrders)
    }
  }, [orders]);


  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOrders(orders)

    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilteredOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status && status.map(status => (
          <LinkMenu
            key={status.id}
            onClick={() =>
              handleStatus(status)}
            $isActiveStatus={activeStatus === status.id} >
            {status.label}
          </LinkMenu>
        ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ color: ' #fff' }}> Pedidos </TableCell>
              <TableCell style={{ color: ' #fff' }}> Cliente</TableCell>
              <TableCell style={{ color: ' #fff' }}> Data do pedido</TableCell>
              <TableCell style={{ color: ' #fff' }}> Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row} setOrders={setOrders} orders={orders} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,

  }).isRequired
}

export default Orders
