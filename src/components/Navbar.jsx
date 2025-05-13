
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown} from "react-icons/fa";
import {IoCartOutline} from "react-icons/io5"
const NavBar = () => {

  const location = false
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div  className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">

          <Link to="/">
            <h1 className="text-3xl font-bold text-gray-800">
              <span className="text-red-500 font-serif">Woo</span>
              <span className="text-gray-800">Cart</span>
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-blue-500" />
            <span className="font-semibold">{location ? <div></div>: 'Add Address'}</span>
            <FaCaretDown />
          </div>
        </div>
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold text-gray-700">
            <NavLink to={'/'} className={({isActive})=>isActive ? "border-b-3 transition-all border-red-500" : "border-black cursor-pointer"}><li>Home</li></NavLink>
            <NavLink to={'/products'} className={({isActive})=>isActive ? "border-b-3 transition-all border-red-500" : "border-black cursor-pointer"}><li>Products</li></NavLink>
            <NavLink to={'/about'} className={({isActive})=>isActive ? "border-b-3 transition-all border-red-500" : "border-black cursor-pointer"}><li>About</li></NavLink>
            <NavLink to={'/contact'} className={({isActive})=>isActive ? "border-b-3 transition-all border-red-500" : "border-black cursor-pointer"}><li>Contact</li></NavLink>
          </ul>
          <Link to={'/cart'} className="relative">
          <IoCartOutline className="h-7 w-7" />
          <span className="bg-red-500 px-2 absolute rounded-full -top-3 -right-3 text-white">0</span>
          </Link>
          </nav>
      </div>
    </div>
  );
};

export default NavBar;
