import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});
  const [image, setImage] = useState(0)

  // Shopping Cart - Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Open Notification - Add product to cart
  const [openNotification, setOpenNotification] = useState(false);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products - Search by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products - Search by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  
  
  // Filter products by title
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
  }

  // Filter products by title and category
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if(searchType === 'BY_TITLE') return filteredItemsByTitle(items, searchByTitle);
    if(searchType === 'BY_CATEGORY') return filteredItemsByCategory(items, searchByCategory);
    if(searchType === 'BY_TITLE_AND_CATEGORY') return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    if(!searchType) return items;
  }

  useEffect(() => {
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
    if (!searchByTitle && searchByCategory ) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
    if (!searchByTitle && !searchByCategory ) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);


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
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setSearchByCategory,
      searchByCategory,
      openNotification,
      setOpenNotification,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
