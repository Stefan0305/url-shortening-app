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
                    <Logo fill="white" />
                </div>
                <div className="footer-nav-menu">
                    <div className="footer-nav-menu-card">
                        <ul className="footer-nav-menu-list" role="list">
                            <li className='footer-list-heading'>Features</li>
                            <li><a href='#' className='link-reset'>Link Shortening</a></li>
                            <li><a href='#' className='link-reset'>Branded Links</a></li>
                            <li><a href='#' className='link-reset'>Analytics</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav-menu-card">
                        <ul className="footer-nav-menu-list" role="list">
                            <li className='footer-list-heading'>Resources</li>
                            <li><a href='#' className='link-reset'>Blog</a></li>
                            <li><a href='#' className='link-reset'>Developers</a></li>
                            <li><a href='#' className='link-reset'>Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav-menu-card">
                        <ul className="footer-nav-menu-list" role="list">
                            <li className='footer-list-heading'>Company</li>
                            <li><a href='#' className='link-reset'>About</a></li>
                            <li><a href='#' className='link-reset'>Our Team</a></li>
                            <li><a href='#' className='link-reset'>Careers</a></li>
                            <li><a href='#' className='link-reset'>Contact</a></li>
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