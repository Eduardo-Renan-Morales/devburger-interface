import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { formatPrice } from '../../../utils/formatPrice';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';



import paths from "../../../constants/paths";
import { Container, EditIcon, Img } from "./styles";


function ListProducts() {
  const [products, setProducts] = useState()
  const navigate = useNavigate()
  const location = useState()

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('/products');

        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar lista de pedidos:', error);
      }
    }
    loadOrders();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxOutlinedIcon style={{ color: '#0E921B' }} />
    }
    return <CheckBoxOutlineBlankIcon style={{ color: '#BEBEBE' }} />
  }

  function editProduct(product) {

    navigate(paths.EditProduct, { state: product })

  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="header-list">
            <TableRow>
              <TableCell style={{ color: ' #fff' }} > Nome </TableCell>
              <TableCell style={{ color: ' #fff' }}>Preço</TableCell>
              <TableCell style={{ color: ' #fff' }}>Produto em Oferta</TableCell>
              <TableCell style={{ color: ' #fff' }}> Imagem do produto</TableCell>
              <TableCell style={{ color: ' #fff' }}>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatPrice(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center"><Img src={product.url} alt="imagem-produto" /> </TableCell>

                <TableCell>
                  <EditIcon onClick={() => editProduct(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )

}

export default ListProducts

