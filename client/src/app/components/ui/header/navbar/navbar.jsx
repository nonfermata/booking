import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import classes from './navbar.module.css';

const Navbar = () => {
    const { currentUser } = useAuth();
    const adminStatus =
        currentUser && currentUser._id === process.env.REACT_APP_ADMIN;
    const menu = [
        { path: 'admin', name: 'Панель администратора', admin: true },
        { path: 'rooms', name: 'Наши номера' },
        { path: 'booking', name: 'Забронировать', noadmin: true },
        { path: 'contacts', name: 'Контакты' }
    ];
    return (
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                {menu.map(
                    ({ path, name, admin, noadmin }) =>
                        ((adminStatus && !noadmin) ||
                            (!adminStatus && !admin)) && (
                            <li key={path} className={classes.item}>
                                <NavLink
                                    to={'/' + path}
                                    className={(isActive) =>
                                        isActive ? classes.active : null
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        )
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
