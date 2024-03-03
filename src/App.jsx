import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { createContext, useState } from "react"


export const UserContext = createContext();
function App() {
    const [data,setData] = useState([]);

  return (
    <>
    <UserContext.Provider value={{data,setData}} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  )
}

export default App
