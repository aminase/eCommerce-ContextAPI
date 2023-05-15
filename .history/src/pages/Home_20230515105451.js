import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  const { products } = useContext(ProductContext)
  console.log(products, 'home')

  const filteredProducts = products.filter(
    item => item.category === "men's clothing" || item.category === "women's clothing"
  )
  console.log(filteredProducts, 'filtere')
  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid'>
            {filteredProducts.map(product => {
              return (
                <div className='w-full h-[300px] bg-pink-200' key={product.id}>
                  {product.title}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
