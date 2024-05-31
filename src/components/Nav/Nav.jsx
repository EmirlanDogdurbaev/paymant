import {Link} from "react-router-dom";
import classes from "./Nav.module.scss";
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
                    <Link className={classes.navbar__link} to="/">
                        О нас
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/">
                        Контакты
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.navbar__link} to="/">
                        testing
                    </Link>
                </li>
                <li className={classes.navbar__item}>
                    <Link className={classes.login} to="/">
                        Войти
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;