import React from 'react'
import Test4 from '../../test/Slidebar/Test4';


function Header() {
  return (
    <div className="navbar__footer">
      {/* <div className="navbar__footer_text">Best Seller</div>
  <div className="navbar__footer_text">Mobile</div>
  <div className="navbar__footer_text">Amazon Pay</div>
  <div className="navbar__footer_text">Fashion</div>
  <div className="navbar__footer_text">Electronics</div>
  <div className="navbar__footer_text">Prime</div>
  <div className="navbar__footer_text">New Release</div>
  <div className="navbar__footer_text">Customer Service</div>
  <div className="navbar__footer_text">Computers</div>
  <div className="navbar__footer_text">Home & Kitchen</div> */}
      <div className="App" id="outer-container">
        <Test4 className="menu_container" />
      </div>
    </div>
  );
}

export default Header