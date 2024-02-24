import logo from "../assets/food_order_online-removebg-preview.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/useContext";
import { useSelector } from "react-redux";



const Header = () => {

const cartItem = useSelector((store) => store.cart.items);
console.log(cartItem);
    const {loggedInUser} = useContext(userContext);
    return(
        <div className="flex justify-between items-center px-8 border-b-2 border-b-gray-100 shadow-md flex-wrap">
            <div className="">
                <img className="w-36" src={logo}/>
            </div>
            <nav className="hidden lg:flex md:flex">
                <ul className=" flex gap-6 text-2xl font-semibold cursor-pointer uppercase">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <Link to={"/cart"}><li>cartItem - ({cartItem.length})</li></Link>
                    
                    <li>{loggedInUser}</li>
                </ul>
                
            </nav>
            {/* < RiMenu2Fill size={33} className="md:hidden lg:hidden"/> */}

        </div>
    )
};

export default Header;

