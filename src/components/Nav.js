import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/articles'>Articles</NavLink></li>
            <li><NavLink to='/reviews'>Reviews</NavLink></li>
            <li><NavLink to='/users'>Authors</NavLink></li>

        </>
    );
}