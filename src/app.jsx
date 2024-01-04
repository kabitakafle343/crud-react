import Read from "../Components/Read";
import Create from "../Components/Create"
import Update from "../Components/Update"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {

  return (

     <BrowserRouter>
      <Routes>
        <Route path="/" element={  <Create/>}></Route>
        <Route path="/read" element={  <Read/>}></Route>
        <Route path="/update" element={  <Update/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
