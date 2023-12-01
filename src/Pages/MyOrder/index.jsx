import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'


function MyOrder() {

  const { order } = useContext(ShoppingCartContext);
  let currentPath = window.location.pathname.split('/').slice(-1)[0];
  if(currentPath === 'last') currentPath = order.length - 1;

  return (
    <Layout>
      <div className='flex w-80 items-center relative justify-center mb-6'>
        <Link to='/my-orders' className='absolute left-0'> 
          <ChevronLeftIcon className='h-6 w-6 cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
      {
        order?.[currentPath]?.products.map(product => (     
          <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            quantity={product.quantity}
          />)
        )
      }
      </div>
    </Layout>
  )
}

export default MyOrder
