import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {

  const { 
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
  } = useContext(ShoppingCartContext);
  console.log('Se han actualizado los productos', cartProducts);


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
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            quantity={product.quantity}
          />)
        )
      }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;