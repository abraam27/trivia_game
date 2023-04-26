import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Questions</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;