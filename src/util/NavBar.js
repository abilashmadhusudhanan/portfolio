import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";

const NavBar = () => {
    return <div className={Styles.navBar}>
        <ul className={Styles.navBarUl}>
            <li className={Styles.navBarLi}><NavLink className={({ isActive }) => Styles.navOption + (isActive ? " " + Styles.activated : "")} to='/about'>About</NavLink></li>
            <li className={Styles.navBarLi}><NavLink className={({ isActive }) => Styles.navOption + (isActive ? " " + Styles.activated : "")} to='/education'>Education</NavLink></li>
            <li className={Styles.navBarLi}><NavLink className={({ isActive }) => Styles.navOption + (isActive ? " " + Styles.activated : "")} to='/experience'>Experience</NavLink></li>
            <li className={Styles.navBarLi}><NavLink className={({ isActive }) => Styles.navOption + (isActive ? " " + Styles.activated : "")} to='/projects'>Projects</NavLink></li>
            <li className={Styles.navBarLi}><NavLink className={({ isActive }) => Styles.navOption + (isActive ? " " + Styles.activated : "")} to='/contact'>Contact</NavLink></li>
        </ul>
    </div>
};

export default NavBar;