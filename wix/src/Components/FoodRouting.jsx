import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Home";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";
import Books from "../Pages/Books";
import ClientAlbum from "../Pages/ClientAlbum";
import Contact from "../Pages/Contact";



const FoodRouting = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="books" element={<Books/>}/>
        <Route path="blog" element={<Books/>}/>
        <Route path="clientalbum" element={<ClientAlbum/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default FoodRouting;