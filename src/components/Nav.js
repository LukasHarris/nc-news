import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/articles'>Articles</NavLink></li>
            <li><NavLink to='/authors'>Authors</NavLink></li>
        </>
    );
}