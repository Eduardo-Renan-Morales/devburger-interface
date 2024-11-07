import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { BackButton, Banner, CategoryButton, CategoryMenu, Container, ProdutsContainer } from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const navigate = useNavigate()

  const { search } = useLocation()

  const queryParams = new URLSearchParams(search)

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria')

    if (categoryId) {
      return categoryId
    }
    return 0
  })

  async function loadProducts() {
    try {
      const { data } = await api.get('/products')
      const newProducts = data
        .map(product => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }))

      setProducts(newProducts)
    }
    catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  }

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');

        const newCategory = [{ id: 0, name: "todas" }, ...data]
        setCategories(newCategory);

      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }
    loadProducts()
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (products) => products.category_id === activeCategory,
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1> O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI!

          <span> Esse cardápio está irresistível</span>
        </h1>

      </Banner>
      <CategoryMenu>
        <BackButton onClick={() => {
          navigate('/')
        }}> voltar</BackButton>

        {categories.map(category => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`
                },
                {
                  replace: true,
                },
              )
              setActiveCategory(category.id)
            }}>

            {category.name}
          </ CategoryButton>
        ))}
      </CategoryMenu>

      <ProdutsContainer>
        {filteredProducts.map(product => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProdutsContainer>

    </Container>

  )

}
