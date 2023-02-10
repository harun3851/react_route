import { Link } from "react-router-dom";
export const Navbar = () =>{
    return  <div>
    <Link to="/" >Home</Link>
    <br></br>
    <Link to="/Menu" >Menu</Link>
    <br></br>
    <Link to="/Contact" >Contact</Link>;
    </div>
};