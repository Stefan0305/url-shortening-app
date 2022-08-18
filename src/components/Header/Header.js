import { useState } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as HamburgerMenu } from '../../images/hamburger-menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../images/close-icon.svg';


function Header() {

    const [menuIsActive, setMenuIsActive] = useState(false);

    function handleToggleMenu() {
        setMenuIsActive(!menuIsActive);
    }

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <button className="mobile-nav-toggle">
                    {menuIsActive ? <CloseMenuIcon onClick={handleToggleMenu} /> : <HamburgerMenu onClick={handleToggleMenu} />}
                </button>

                <div className={menuIsActive ? 'header-navbar-wrapper active' : "header-navbar-wrapper"}>
                    <nav className="header-navbar">
                        <ul className="header-nav-list" role="list">
                            <li className='spacer-links'><a href="#">Features</a></li>
                            <li className='spacer-links'><a href="#">Pricing</a></li>
                            <li className='spacer-links'><a href="#">Resources</a></li>
                        </ul>
                    </nav>
                    <hr className='horizontal-divider spacer-links' />
                    <div className="login-div">
                        <button className="login-btn spacer-links">Login</button>
                        <button className="button signup-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;