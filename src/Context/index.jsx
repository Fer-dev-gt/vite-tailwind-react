import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});
  const [image, setImage] = useState(0)

  // Shopping Cart - Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      image,
      setImage,
      setCartProducts,
      cartProducts,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
