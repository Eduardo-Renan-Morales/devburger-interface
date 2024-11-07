import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductsInCart = async (product) => {

    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newProductsInCart = []

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts

      newProductsInCart[cartIndex].quantity =
        newProductsInCart[cartIndex].quantity + 1

      setCartProducts(newProductsInCart)
    } else {
      product.quantity = 1
      newProductsInCart = [...cartProducts, product]

      setCartProducts(newProductsInCart)
    }

    upDataLocalStorage(newProductsInCart)
  }


  const clearCart = (product) => {

  }

  const deleteProducts = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)

    setCartProducts(newCart)
    upDataLocalStorage(newCart)
  }

  const inCreaseProducts = (productId) => {
    const newCart = cartProducts.map(prd => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    })

    setCartProducts(newCart)
    upDataLocalStorage(newCart)
  }

  const deCreaseProducts = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(prd => {
        return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
      })

      setCartProducts(newCart)
      upDataLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  const upDataLocalStorage = (products) => {
    localStorage.setItem('deveburger:cartInfo', JSON.stringify(products))
  }
  useEffect(() => {
    const clientCartData = localStorage.getItem('deveburger:cartInfo')

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData))
    }

  }, [])

  return (<CartContext.Provider value={{
    putProductsInCart,
    cartProducts,
    clearCart,
    deleteProducts,
    inCreaseProducts,
    deCreaseProducts
  }}>
    {children}
  </CartContext.Provider>

  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with a context')
  }

  return context
}
