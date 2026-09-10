import styles from './Navbar.module.css';
const Navbar = () => {
    return(
    <nav className={`${styles.navbar} container`} >
    <div className="logo">
        <img className="" src="../images/Frame.png" />
    </div>
        <ul>
            <li href="/Home">HOME</li>
            <li href="/About">ABOUT</li>
            <li href="/Contact">CONTACT</li>
        </ul>
    </nav>
    )
}
export default Navbar;