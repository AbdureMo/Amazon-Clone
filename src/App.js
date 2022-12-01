import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { auth } from "./Non-Components/firebase";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Orders from "./Components/Orders/Orders";
// import Header from "./Components/Header/Header";


const promise = loadStripe(
  "pk_test_51Lz3XlBtfcWg7X9goPDchIoBJsUzCz48ipqiDPluYDmbuznSFhnIRosgorFx4B7spIPyTcXQ8ekvtWpV6McYZDpd00Q9m1N2kQ"
);


function App() {
 const [{}, dispatch] = useStateValue();
 useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
     // console.log("THE USER IS >>> ", authUser);
     if (authUser) {
       // the user just logged in / the user was logged in

       dispatch({
         type: "SET_USER",
         user: authUser,
       });
     } else {
       // the user is logged out
       dispatch({
         type: "SET_USER",
         user: null,
       });
     }
   });
 }, []);
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Nav /> <Orders />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Nav /> <Checkout />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Nav />{" "}
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <Nav /> <Home />
              </>
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
