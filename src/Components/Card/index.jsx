import { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';

const Card = ({data}) => {
  const { 
    count, 
    setCount, 
    openProductDetail,
    setProductToShow, 
    setImage,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    closeProductDetail,
    setOpenNotification,
  } = useContext(ShoppingCartContext);


  const showProduct = (productDetail) => {
    closeCheckoutSideMenu();
    openProductDetail();
    setProductToShow(productDetail);
    setImage(0);
  }


  const addProductsToCart = (event, ProductData) => {
    // Animación de notificación al agregar un producto al carrito
    setOpenNotification(true);
    setTimeout(() => {
      setOpenNotification(false);
    }, 1000);

    event.stopPropagation();
    openCheckoutSideMenu();
    closeProductDetail();
    setCount(count + 1);  

    const productExists = cartProducts.some(product => product.id === ProductData.id);          // Validamos si el producto ya se encuentra en el carrito, de ser así, aumentamos la cantidad en 1, de lo contrario, le agregamos la propiedad quantity con valor uno, y luego seteamos el carrito agregando ese producto

    // Solo se mostrará una Card por producto, por lo tanto, si el producto ya está en el carrito, solo aumentará la cantidad en 1, de lo contrario, se agregará al carrito
		if (productExists) {                                                                        // valida la existencia del producto
			const productCart = cartProducts.find(product => product.id === ProductData.id);          // busca el producto
			productCart.quantity += 1;                                                                // aumenta la cantidad en 1
		} else {
			ProductData.quantity = 1;                                                                 // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
			setCartProducts([...cartProducts, ProductData]);
		}
  }


  const renderIcon = (id) => {
    const isInCart = cartProducts.some(product => product.id === id);
    if (isInCart) {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-lime-400 text-black w-6 h-6 rounded-full m-2 hover:bg-blue-500'
          onClick={(event) => {
            addProductsToCart(event, data);
          }}
        >
          <CheckIcon className='h-4 w-4'/>
        </div>
      )
    } else {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:bg-blue-500'
          onClick={(event) => {
            addProductsToCart(event, data);
          }}
        >
          <PlusIcon className='h-4 w-4'/>
        </div>
      )
    }
  }


  return (
    <div 
    className='bg-white cursor-pointer w-56 h-64 rounded-lg shadow-md'
    onClick={() => showProduct(data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5'>{data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title}/>
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between items-center m-2'>
        <span className='text-sm font-light truncate'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card;

