import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as HamburgerMenu } from '../../images/hamburger-menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../images/close-icon.svg';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <button className="mobile-nav-toggle" aria-controls="header-nav-list">
                    <HamburgerMenu />
                    <CloseMenuIcon />
                </button>

                <div className="header-navbar-wrapper">
                    <nav className="header-navbar">
                        <ul className="header-nav-list" id="header-nav-list" role="list">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </nav>
                    <div className="login-div">
                        <button className="login-btn">Login</button>
                        <button className="button signup-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;