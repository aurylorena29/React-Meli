import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../app.scss';
import './navbar.scss';


const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    console.log(searchTerm);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/items?search=${searchTerm}`);
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar__block">
                <div className=" col navbar__logo">
                    <a href="/">
                        <img src="/logo_large_25years_v2.png" alt="Logo" />
                    </a>
                </div>
                <div className="navbar__search">
                    <form onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                                console.log(setSearchTerm);
                            }}
                            placeholder="Buscar productos, marcas y más..."
                        />
                        <button type="submit">🔍</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
