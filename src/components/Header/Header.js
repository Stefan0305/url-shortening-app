import { ReactComponent as Logo } from '../../images/logo.svg';


function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header-navbar">
                    <Logo />
                    <ul className="header-nav-list">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </nav>
                <div className="login-div">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header;