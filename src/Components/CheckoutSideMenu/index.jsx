import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = () => {

  const { 
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setCount,
    count,
  } = useContext(ShoppingCartContext);
  console.log('Se han actualizado los productos', cartProducts);

  const handleDelete = (id, quantity) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts);
    setCount(count - quantity);
  }


  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon 
            className='h-6 w-6 cursor-pointer'
            onClick={closeCheckoutSideMenu}/>
        </div>
      </div>
      <div className='px-6'>
      {
        cartProducts.map(product => (
          <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            quantity={product.quantity}
            handleDelete={handleDelete}
          />)
        )
      }
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;