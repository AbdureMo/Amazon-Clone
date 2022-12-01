import React from 'react'
import "./Test3.css"
import Test4 from './Test4';

function Test3() {
  return ( 
    <div className="App" id="outer-container">
      <Test4 pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <p>Cool Restaurant</p>
        <p>Check out our offerings in the sidebar!</p>
      </div>
    </div>
  );
}

export default Test3