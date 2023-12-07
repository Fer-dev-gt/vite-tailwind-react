import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {

  const { 
    items, 
    setSearchByTitle,
    searchByTitle, 
    filteredItems,
  } = useContext(ShoppingCartContext);

  const renderView = () => {
    let itemsToRender = searchByTitle?.length > 0 ? filteredItems : items;
    filteredItems?.length > 0 ? itemsToRender = filteredItems : itemsToRender = null;
 
    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p className='col-span-4 flex justify-center'>No Results Found :o</p>;
    }
  };

  return (
    <Layout>
      <div className='flex w-80 items-center relative justify-center mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        type='search' 
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value) }
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
