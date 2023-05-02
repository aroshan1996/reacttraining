import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Child2 from "../child2";

const Child1 = ({name,age}) => {
  const [toggle,setToggle]=useState(false);
  const location =useLocation();

  console.log(location)
  return (
    <>
    {
      toggle ? 
     <Child2/>
    : <div>
    <p>i am child 1</p>
    <button onClick={()=>setToggle(true)}>Toggle Component</button>
  </div>
    }
  {/* <div>
    <p>i am child 1</p>
    <button onClick={()=>setToggle(true)}>Toggle Component</button>
  </div>
    <div>
      {toggle && <Child2/>}
    </div> */}
    <button onClick={()=>localStorage.removeItem('token')}>Logout</button>
    </>
  );
};
export default Child1;