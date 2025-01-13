import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {

  const userCart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)


  const handleCart = (product) => {
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item?.id == product.id)
    if (existingProduct) {
      alert("Product quantity is incrementing...!!!")
    } else {
      alert('Product added to cart')
    }
  }




  return (
    <>
      <Header />
      <div style={{ paddingTop: "110px" }} className='px-5'>
        {
          userWishlist?.length > 0 ?
            <>
              <h3 className='text-4xl font-bold text-red-600 my-2'>My Wishlist</h3>
              <div className='grid grid-cols-4 gap-4'>
                {
                  userWishlist?.map(product => (
                    <div className='rounded p-2 shadow' key={product?.id}>
                      <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold text-wrap'>{product?.title}</h3>
                        <div className='flex justify-evenly mt-3'>
                          <button className='text-xl' onClick={() => dispatch(removeItem(product?.id))}><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                          <button className='text-xl' onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-plus text-green-700"></i></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='flex justify-center h-screen'>
              <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
              <h1 className='text-red-600 text-3xl'>Your wishlist is empty</h1>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist