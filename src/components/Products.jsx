import { useContext, useEffect } from "react";
import { UserContext } from "../App";

const Products = () => {

  const {data,setData} = useContext(UserContext);
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
    <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2" >
                  {
                    data?.map((prod,value)=>{
                      return(
                        <>
                          <div key={value} className="bg-gray-600 h-100 p-4" >
                            <img className="w-12 h-12 rounded-full" src={prod.image} />
                            <h3>{prod.title}</h3>
                            <hr/>
                            <p>{prod.description}</p>
                          </div>
                        </>
                      )
                  })
                  }
            </div>
    </div>
  );
};

export default Products;
