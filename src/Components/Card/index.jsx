import { useContext, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const { 
    count, 
    setCount, 
    openProductDetail,
    setProductToShow, 
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail)
  }

  useEffect(() => {
    console.log('COUNT: ', count);
  }, [count]);

  return (
    <div 
    className='bg-white cursor-pointer w-56 h-64 rounded-lg shadow-md'
    onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title}/>
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:bg-blue-500'
          onClick={(e) => {
            e.stopPropagation();
            setCount(count + 1);
          }
        }>
          <PlusIcon className='h-4 w-4'/>
        </div>
      </figure>
      <p className='flex justify-between items-center m-2'>
        <span className='text-sm font-light truncate'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card;

