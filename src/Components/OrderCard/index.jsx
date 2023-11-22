import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
  const { title, imageUrl, price, quantity } = props;

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
      <span className='text-sm w-4'>{quantity}</span>
        <figure className='w-20 h-20 flex-shrink-0'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
        </figure>
        <p className='text-sm font-light overflow-hidden overflow-ellipsis w-[calc(40%)]'>{title}</p>
      </div>
      <div className='flex items-center gap-2 absolute right-3'>
        <p className='text-lg font-medium'>${price * quantity}</p>
        <XMarkIcon 
          className='h-6 w-6 cursor-pointer'>
        </XMarkIcon>
      </div>  
    </div>
  )
}

export default OrderCard
 