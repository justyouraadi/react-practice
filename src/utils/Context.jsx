import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(
        "https://fakestoreapi.com/products",
        requestOptions
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <UserContext.Provider value={{ data, setData }}>{props.children}</UserContext.Provider>
    </>
  );
};

export default Context;
