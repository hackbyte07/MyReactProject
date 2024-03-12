import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');

    const location = useLocation();

    const handleSetActiveLink = (link: string) => {
        setActiveLink(link);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        onClick={() => handleSetActiveLink('home')}
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        onClick={() => handleSetActiveLink('about')}
                        className={location.pathname === '/about' ? 'active' : ''}
                    >
                        About
                    </Link>
                </li>   
                <li>
                    <Link 
                        to="/todo" 
                        onClick={() => handleSetActiveLink('todo')}
                        className={location.pathname === '/todo' ? 'active' : ''}
                    >
                        Todo
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
