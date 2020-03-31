import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__wrapper">
                    <ul className="navbar__list">
                        <li className="navbar__item"><span>O que e</span></li>
                        <li className="navbar__item"><span>Como funciona</span></li>
                        <li className="navbar__item"><span>Vantagens</span></li>
                        <li className="navbar__item"><span>Contato</span></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;