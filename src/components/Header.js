import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MainHeader } from "../styles/MainHeader";
import { Nav } from "../styles/Nav";

const Header = () => {
    const cart = useSelector(state => state.cart);
    return (
        <MainHeader>
            <h1>Most Popular Movies</h1>
            <Nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </Nav>
            <p>Items in Playlist: ({cart.movies.length})</p>
        </MainHeader>
    );
}

export default Header;