import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as FacebookIcon } from '../../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../images/icon-instagram.svg';


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <Logo />
                </div>
                <div className="footer-nav-menu">
                    <div className="footer-nav-menu-card">
                        <ul className="footer-nav-menu-list">
                            <li>Features</li>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className="footer-nav-menu-card">
                        <ul className="footer-nav-menu-list">
                            <li>Resources</li>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="footer-nav-menu-card">
                        <ul className="footer-nav-menu-list">
                            <li>Company</li>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="social-media-links">
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                </div>
            </div>
        </footer>
    )
}

export default Footer;