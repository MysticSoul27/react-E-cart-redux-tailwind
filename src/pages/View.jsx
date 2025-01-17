import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {

  const userCart = useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const [product, setProduct] = useState({})


  const { id } = useParams()
  console.log(id);
  const { allProducts } = useSelector(state => state.productReducer)
  console.log(allProducts);

  useEffect(() => {
    if (sessionStorage.getItem("allproducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allproducts"))
      //console.log(allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item => item.id == id))

    }

  }, [])

  console.log(product);

  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item => item.id==id)
    if(existingProduct){
      alert("Product already wishlisted...!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item.id==id)
    if(existingProduct){
      alert("Product quantity is incrementing...!!!")
    }else{
      alert('Product added to cart')
    }
  }




  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <div>
            <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="" />
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2' onClick={handleWishlist}>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2' onClick={handleCart}>Add to cart</button>
            </div>
          </div>
          <div className='p-3'>
            <h5 className='font-bold'>PID: {product?.id}</h5>
            <h1 className='text-5xl font-bold'>{product?.title}</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <p>
              <span className='font-bold'>Description: </span>{product?.description}
            </p>


            <h3 className='font-bold my-2'>Client Reviews</h3>
            {
              product?.reviews?.length > 0 ?
                product?.reviews?.map(item => (
                  <div key={item?.date} className='shadow-border p-2 mb-2'>
                    <h5>
                      <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
                    </h5>
                    <p>Rating: {item?.rating}</p>
                  </div>
                ))
                :
                <div>No reviews Yet!!!</div>
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default View