import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
        </div>
        <div>
          <h5 className='font-bold'>PID: 1</h5>
          <h1 className='text-5xl font-bold'>Product Name</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ 230</h4>
          <h4>Brand: brand</h4>
          <h4>Category: category</h4>
          <p>
            <span className='font-bold'>Description: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolores dolore quam rem modi, deleniti odit fugit, repellendus earum cumque error beatae delectus ipsa nisi maxime quidem quos illum. Rem.
          </p>
          <div className='flex justify-between mt-5'>
            <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
            <button className='bg-green-600 text-white p-2'>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View