import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
  const { id, image, price, rating, title, description, category } = product
  console.log(product, 'PRODUCT')
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image}
              alt=''
            />
          </div>
          <div className='absolute top-6 -right-11 group-hover:right-5 top-6 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>{category}</div>
        <Link to={`/product/${id}`}>
          <h2>{title}</h2>
        </Link>
        <div>{price}</div>
      </div>
    </div>
  )
}

export default Product
