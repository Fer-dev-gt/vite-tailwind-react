import { useContext, useState } from 'react'
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {

  const { 
    isProductDetailOpen,
    closeProductDetail,
    productToShow, 
    image,
    setImage,
  } = useContext(ShoppingCartContext);


  const nextImage = () => {
    if((image === productToShow.images.length - 1 && productToShow.images.length > 1) || image > 3) {
      setImage(0)
      console.log(productToShow.images);
    } else {
      setImage(image + 1)
      console.log(productToShow.images);
      console.log('IMAGEN',image+1);
    }
  }

  return (
    <aside 
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon 
            className='h-6 w-6 cursor-pointer'
            onClick={closeProductDetail}/>
        </div>
      </div>
      <figure className='px-6 relative'>
        <img 
          className='w-full h-full rounded-lg' 
          src={productToShow.images && productToShow.images[image]} 
          alt={productToShow.title}/>
          {( productToShow.images && productToShow.images.length > 1) && <ChevronRightIcon
            className={`${productToShow.images && (productToShow.images.lengt === 1 ? 'hidden' : '' )} w-8 h-8 fill-black cursor-pointer absolute top-1/2 right-6 transform -translate-y-1/2`}
            onClick={() => nextImage()}
          />}
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-ligh text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail