

// src/Nav.js
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import burger from '../../assets/static/icons/menu.svg';
import closer from '../../assets/static/icons/x.svg';
import classes from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar__list}>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/">
                        Главная
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/about">
                        О нас
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/contact">
                        Контакты
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.login} to="/login">
                        Войти
                    </Link>
                </li>
            </ul>
            <div className={classes.navbar__burger}>
                <Menu
                    right
                    customBurgerIcon={<img src={burger} alt="Menu" />}
                >
                    <Link id="home" className="menu-item" to="/">
                        Главная
                    </Link>
                    <Link id="about" className="menu-item" to="/about">
                        О нас
                    </Link>
                    <Link id="contact" className="menu-item" to="/contact">
                        Контакты
                    </Link>
                    <Link id="login" className="menu-item" to="/login">
                        Войти
                    </Link>
                </Menu>
            </div>
        </nav>
    );
};

export default Nav;