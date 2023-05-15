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
      <section>
        <div className='container mx-auto'>
          <div>
            {filteredProducts.map(product => {
              return <div key={product.id}>{product.title}</div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
