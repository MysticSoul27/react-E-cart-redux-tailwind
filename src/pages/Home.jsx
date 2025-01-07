import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

    const dispatch = useDispatch()

    const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
    console.log(allProducts, loading, errorMsg);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: "120px" }} className='container px-4 mx-auto'>
                {
                    loading ?
                        <div className='flex justify-center items-center my-5 text-lg'>Loading...
                            <img width={'70px'} height={'70px'} src="https://camo.githubusercontent.com/bfb2b63eeb7b21626c1a896e6e58a55838135977ce8b5d7ee13a60080b56a1e7/68747470733a2f2f6173736574732d76322e6c6f7474696566696c65732e636f6d2f612f30336364633665302d313138622d313165652d626630382d3037643838613934316362642f696969774730764a514e2e676966" alt="loading" />
                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    allProducts?.length > 0 ?
                                        allProducts?.map(product => (
                                            <div key={product?.id} className='rounded p-2 shadow'>
                                                <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                                                <div className='text-center'>
                                                    <h3 className='text-xl font-bold text-wrap'>{product?.title}</h3>
                                                    <Link to={`/${product?.id}/view`} className=' bg-violet-600 rounded p-1 mt-3'>View More...</Link>
                                                </div>
                                            </div>
                                        ))

                                        :
                                        <div className='flex justify-center items-center text-red-600 font-bold my-5 text-lg'>
                                            Product not found...
                                        </div>
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Home