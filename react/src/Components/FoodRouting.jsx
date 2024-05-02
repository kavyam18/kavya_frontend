import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio1";
import About from "./About";
import Books from "./Books";
import ClientAlbum from "./ClientAlbum";
import Contact from "./Contact";



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