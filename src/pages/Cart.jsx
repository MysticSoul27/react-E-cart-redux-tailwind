import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incerementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {

  const navigate = useNavigate()
  const [cartTotal, setCartTotal] = useState(0)
  const userCart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
    }
  },[userCart])

  const handleDecrementQuantity = (product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut = ()=>{
    dispatch(emptyCart())
    alert('Order confirmed...Thank you for purchasing...')
    //redirect to home page
    navigate('/')
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '110px' }} className='px-5'>
        {
          userCart?.length > 0 ?
            <>
              <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
              <div className='grid grid-cols-3 gap-4 mt-5'>
                <div className='col-span-2 border rounded p-5 shadow'>
                  <table className='table-auto w-full'>
                    <thead>
                      <tr>
                        <td className='font-semibold'>#</td>
                        <td className='font-semibold'>Name</td>
                        <td className='font-semibold'>Image</td>
                        <td className='font-semibold'>Quantity</td>
                        <td className='font-semibold'>Price</td>
                        <td className='font-semibold'>...</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        userCart?.map((product, index) => (
                          <tr>
                            <td>{index+1}</td>
                            <td>{product?.title}</td>
                            <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                            <td>
                              <div className='flex'>
                                <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                                <input  style={{ width: '40px' }} type="text" className='border p-1 rounded mx-2' value={product?.quantity} readOnly />
                                <button onClick={()=>dispatch(incerementQuantity(product?.id))} className='font-bold p-1'>+</button>
                              </div>
                            </td>
                            <td>$ {product?.totalPrice}</td>
                            <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>

                  <div className='float-right mt-5'>
                    <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                    <Link to={'/home'} className='bg-blue-600 rounded p-2 text-white ms-3'>Shop More....</Link>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='border rounded shadow p-5'>
                  <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
                  <hr />
                  <button onClick={checkOut} className='bg-green-600 rounded text-white w-full mt-4 p-2'>Check Out</button>
                </div>
              </div>
            </>
            :
            <div className='flex justify-center h-screen'>
              <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
              <h1 className='text-red-600 text-3xl'>Your cart is empty</h1>
            </div>
        }
      </div>
    </>
  )
}

export default Cart