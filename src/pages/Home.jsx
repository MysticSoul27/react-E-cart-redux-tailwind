import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

  return (
    <>
        <Header insideHome={true}/>
        <div style={{paddingTop: "110px"}} className='container px-4 mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='rounded p-2 shadow'>
                    <img width={'100%'} height={'200px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
                    <div className='text-center'>
                        <h3 className='text-xl font-bold text-wrap'>Product Name</h3>
                        <Link to={'/id/view'} className=' bg-violet-600 rounded p-1 mt-3'>View More...</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home