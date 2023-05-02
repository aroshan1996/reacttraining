import React, { useEffect, useState } from "react";

const Services = () => {
    const [triggerapi,setTriggerApi]=useState(false)
    console.log("hello");
  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((err) => {
          return err;
        });
  }, [triggerapi]);
  console.log("there");
  return <>
  <button onClick={()=>setTriggerApi(!triggerapi)}>Call Api AGian</button>
  </>;
};

export default Services;
