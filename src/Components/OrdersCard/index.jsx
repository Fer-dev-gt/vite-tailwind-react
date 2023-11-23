import { ChevronRightIcon, CalendarDaysIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const OrdersCard = props => {
  const { totalPrice, totalProducts, date} = props;

  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-96'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-1'>
          <span className='font-light flex'>
            <CalendarDaysIcon className='h-6 w-6 text-black' />
            <div className='ml-2'>{date}</div>
          </span>
          <span className='font-light flex'>
            <ShoppingCartIcon className='h-6 w-6 text-black' />
            <div className='ml-2'>{`${totalProducts} ${totalProducts === 1 ? 'product' : 'products'}`}</div>
          </span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='font-medium text-2xl flex'>
            <div>${totalPrice}</div>
          </span>
          <ChevronRightIcon className='h-6 w-6 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}



export default OrdersCard
 