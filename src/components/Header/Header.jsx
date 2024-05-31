import { Link } from "react-router-dom";
import  classes from "./Header.module.scss"


const Header = () => {
    return (  
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.Header__inner}>
                    <Link className={classes.Header__logo} to="/">
                        Logo
                    </Link>
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
                                <Link className={classes.login} to="/">
                                    Войти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
 
export default Header;