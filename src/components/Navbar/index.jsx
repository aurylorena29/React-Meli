import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SearchContext } from '../../context'
import '../../app.scss'
import './navbar.scss'

const Navbar = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/items?search=${searchTerm}`);
        } else {
            navigate('/*');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__block">
                <div className="navbar__logo">
                    <a href="/">
                        <img src="/logo_large_25years_v2.png" alt="Logo" />
                    </a>
                </div>
                <div className="navbar__search">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
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