import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './Nav.module.scss';
import Logout from "../../module/Auth/Logout/Logout.jsx";

const Nav = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuActive((prevState) => !prevState);
    };

    return (
        <nav className={classes.navbar}>
            <ul className={`${classes.navbar__list} ${isMenuActive ? classes.active : ''}`}>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/" onClick={toggleMenuHandler}>
                        Главная
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/about" onClick={toggleMenuHandler}>
                        О нас
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/contact" onClick={toggleMenuHandler}>
                        Контакты
                    </Link>
                </li>
                {
                    localStorage.getItem("access_token") ? (
                        <li className={classes.navbar__item}>
                            <Link className={classes.navbar__link} to="/transaction" onClick={toggleMenuHandler}>
                                Транзакции
                            </Link>
                        </li>
                    ) : null
                }
                <li className={classes.navbar__item}>
                    {
                        localStorage.getItem("access_token") ? (
                            <Logout/>
                        ) : (
                            <>
                                <Link className={classes.login} to="/login" onClick={toggleMenuHandler}
                                      style={{marginRight: "10px"}}>
                                    Войти
                                </Link>
                                <Link className={classes.login} to="/signup" onClick={toggleMenuHandler}>
                                    Регистрация
                                </Link>
                            </>
                        )
                    }
                </li>
            </ul>
            <button className={classes.navbar__menu} onClick={toggleMenuHandler}>
                <MenuIcon className={classes.navbar__icon}/>
            </button>
        </nav>
    );
};

export default Nav;
