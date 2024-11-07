import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

import paths from '../../constants/paths';

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ReceiptLongOutlinedIcon,
  },

  {
    id: 2,
    label: 'Listar produtos',
    link: paths.Products,
    icon: FormatListBulletedOutlinedIcon
  },

  {
    id: 3,
    label: 'Cadastrar produtos',
    link: paths.NewProducts,
    icon: AddShoppingCartOutlinedIcon
  }

]

export default listLinks
