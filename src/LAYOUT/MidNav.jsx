import logo from "../assets/p-logo.png";
import { Navbar } from 'flowbite-react';
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import UpNav from "../LAYOUT/UpNav";
import { useSelector } from "react-redux"; 

export default function MidNav() {

  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlistCount = wishlist.length;

  return (
    <header className="fixed top-0 left-0 w-full z-20 border-b">
      <UpNav />
      <Navbar>
        <Navbar.Brand>
          <div className="w-40 hover:scale-105 lg:ml-[-4rem]">
            <img src={logo} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link>
            <h5 className='lg:text-[1rem] text-l font-bold hover:underline hover:text-blue-600 duration-300'>
              <Link to="/">HOME</Link>
            </h5>
          </Navbar.Link>
          <Navbar.Link>
            <h5 className='lg:text-[1rem] text-l font-bold hover:underline hover:text-blue-600 duration-300'>
              <Link to="/shop">SHOP</Link>
            </h5>
          </Navbar.Link>
          <Navbar.Link>
            <h5 className='lg:text-[1rem] text-l font-bold hover:underline hover:text-blue-600 duration-300'>
              <Link to="/aboutus">ABOUT US</Link>
            </h5>
          </Navbar.Link>
          <Navbar.Link>
            <h5 className='lg:text-[1rem] text-l font-bold hover:underline hover:text-blue-600 duration-300'>
              <Link to="/blog">BLOGS</Link>
            </h5>
          </Navbar.Link>
          <Navbar.Link>
            <h5 className='lg:text-[1rem] text-l font-bold hover:underline hover:text-blue-600 duration-300'>
              <Link to="/contactus">CONTACT US</Link>
            </h5>
          </Navbar.Link>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <div className="flex justify-between items-center gap-2 lg:text-[0.9rem] py-4 hover:underline hover:text-blue-600 duration-300  cursor-pointer font-bold ">
            <IoPersonOutline className='text-md' />
            <span><Link to="/login" className='text-md'>Login</Link></span>
          </div>

          <div className="flex justify-between items-center gap-2 lg:text-[0.9rem] py-4 hover:underline hover:text-blue-600 duration-300  cursor-pointer font-bold relative">
            <FaRegHeart className='text-md' />
            <span>
              <Link to="/wishlist" className='text-md'>
                Wishlist
              </Link>

              <span className="absolute top-0 right-0 bg-red-600 text-white px-[0.4rem] py-[0.1rem] rounded-full text-xs">
                {wishlistCount > 0 ? wishlistCount : 0}
              </span>
            </span>
          </div>

          <div className="flex justify-between items-center gap-2 lg:text-[0.9rem] py-4 hover:underline hover:text-blue-600 duration-300  cursor-pointer font-bold relative">
            <MdOutlineShoppingBag className='text-md' />
            <span>
              <Link to="/checkout1" className='text-md'>Checkout</Link>
            </span>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
