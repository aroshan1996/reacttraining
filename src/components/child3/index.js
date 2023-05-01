import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { data1, data2 } from "../../App";

const Child3 = () => {
// const fullAddress=useContext(data2)
// const data=useContext(data1)
const location=useLocation();
const params=useParams();

console.log(location)
console.log(params);

  return (
    <>
    i am child 3
    {/* {fullAddress}
    {data?.name}{data?.age} */}
      {/* <data1.Consumer>
        {(value) => {
          return (
            <data2.Consumer>
              {(address) => {
                return (
                  <h1>
                    {value.name}
                    {value?.age}
                    {address}
                  </h1>
                );
              }}
            </data2.Consumer>
          );
        }}
      </data1.Consumer> */}
    </>
  );
};
export default Child3;
