import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import {useStateValue} from "../StateProvider/StateProvider"
import { auth } from "../../Non-Components/firebase";
// import Test4 from "../../test/Sidebar/Test4"


function Nav() {
   const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
   return (
     <div>
       <div className="header">
         <Link to="/">
           <img
             className="header__logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt="Amazon"
           />
         </Link>
         <div className="header__search">
           <input className="header__searchInput" type="text" />
           <SearchIcon className="header__searchIcon" />
         </div>
         <div className="header__nav">
           <Link to={!user && "/login"} className="header__clearlink">
             <div onClick={handleAuthenticaton} className="header__option">
               <span className="header__optionLineOne">
                 Hello {!user ? "Guest" : user.email}
               </span>
               <span className="header__optionLineTwo">
                 {user ? "Sign Out" : "Sign In"}
               </span>
             </div>
           </Link>
           <Link to="/orders" className="header__clearlink">
             <div className="header__option">
               <span className="header__optionLineOne">Returns</span>
               <span className="header__optionLineTwo">& Orders</span>
             </div>
           </Link>
           <div className="header__option">
             <span className="header__optionLineOne">Your</span>
             <span className="header__optionLineTwo">Prime</span>
           </div>
           <Link to="/checkout" className="header__clearlink">
             <div className="header__optionBasket">
               <AddShoppingCartIcon />
               <span className="header__optionLineTwo header__basketCount">
                 {basket.length}
               </span>
             </div>
           </Link>
         </div>
       </div>
       {/* <div className="Test4">
       <Test4 />
       </div> */}
     </div>
   );
}

  export default Nav;