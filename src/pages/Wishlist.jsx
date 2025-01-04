import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop: "110px"}} className='px-5'>
        <>
          <h3 className='text-4xl font-bold text-red-600 my-2'>My Wishlist</h3>
          <div className='grid grid-cols-4 gap-4'>
                <div className='rounded p-2 shadow'>
                    <img width={'100%'} height={'200px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
                    <div className='text-center'>
                        <h3 className='text-xl font-bold text-wrap'>Product Name</h3>
                        <div className='flex justify-evenly mt-3'>
                          <button className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                          <button className='text-xl'><i className="fa-solid fa-cart-plus text-gray-700"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
      </div>
    </>
  )
}

export default Wishlist