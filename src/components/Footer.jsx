import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{marginTop: "100px"}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-content-between p-4'>
        {/*intro  */}
        <div style={{width: "400px"}} className='p-2 intro'>
          <h5 className='text-xl font-bold'><i className="fa-solid fa-truck-fast me-1"></i>E-Cart</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing .</p>
          <p>Code Licensed luminar, docs CC By 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        {/* Links */}
        <div style={{width: "400px"}}>
          <h5 className='font-bold'>Links</h5>
          <Link to={'/'}><h6>Home</h6></Link>
          <Link to={'/id/view'}><h6>View</h6></Link>
          <Link to={'/wishlist'}><h6>Wishlist</h6></Link>
          <Link to={'/cart'}><h6>Cart</h6></Link>
        </div>
        {/* Resources */}
        <div style={{width: "400px"}}>
          <h5 className='font-bold'>Guides</h5>
          <p><a className='text-decoration-none' href="https://getbootstrap.com/">Bootstrap</a></p>
          <p><a className='text-decoration-none' href="https://getbootstrap.com/">React Bootstrap</a></p>
          <p><a className='text-decoration-none' href="https://getbootstrap.com/">React Router</a></p>
        </div>
        {/* Social media */}
        <div style={{width: "400px"}}>
          <h5 className='font-bold'>Contact Us</h5>
          <div className='flex'><input type="text" placeholder='Enter your email' className='rounded p-2 me-2' /><i className="fa-solid fa-arrow-right mt-3"></i></div>
          <div className='flex p-2'>
            <a style={{textDecoration: "none"}} target='_blank' href="https://www.facebook.com/"><i className="fa-brands fa-facebook me-2"></i></a>
            <a style={{textDecoration: "none"}} target='_blank' href="https://www.instagram.com/accounts/emailsignup/?hl=en"><i className="fa-brands fa-instagram me-2"></i></a>
            <a style={{textDecoration: "none"}} target='_blank' href="https://x.com/i/flow/login"><i className="fa-brands fa-x-twitter me-2"></i></a>
            <a style={{textDecoration: "none"}} target='_blank' href="https://www.facebook.com/"><i className="fa-solid fa-phone me-2"></i></a>
            <a style={{textDecoration: "none"}} target='_blank' href="https://www.facebook.com/"><i className="fa-brands fa-linkedin me-2"></i></a>
            <a style={{textDecoration: "none"}} target='_blank' href="https://github.com/github-login"><i className="fa-brands fa-github me-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer