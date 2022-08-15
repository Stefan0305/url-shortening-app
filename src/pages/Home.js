import { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BgBoost from '../components/ImageComponents/BgBoost';
import BgShorten from '../components/ImageComponents/BgShorten';
import { ReactComponent as IllustrationWorking } from '../images/illustration-working.svg';


function Home() {

    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    function getWindowWidth() {
        const { innerWidth } = window;
        return innerWidth;
    }
    return (
        <div>
            <Header />

            <main className="main-container">
                <section>

                    <div className="light-section">
                        <div className="container">
                            <div className="image-section">
                                <IllustrationWorking />
                            </div>
                            <div className="heading-section">
                                <h1 className='fs-primary-heading'>More than just shorter links</h1>
                                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                                <button className="button">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="dark-section">
                        <div className="container">
                            <div className="submit-link-section">
                                <div className="submit-link-section-background">
                                    <BgShorten width={windowWidth} />
                                </div>
                                <div className="submit-link-section-content">
                                    <form action="" method="post">
                                        <input type="text" name="link-input-field" id="link-input-field" placeholder='Shorten a link here...' />
                                        <button className='button'>Shorten It!</button>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <h2 className='fs-secondary-heading fc-secondary-heading-dark'>Advanced Statistics</h2>
                                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                            </div>
                            <div className="cards-section">
                                <div className="card">
                                    <div className="card-icon"></div>
                                    <div className="card-body">
                                        <h3>Brand Recognition</h3>
                                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-icon"></div>
                                    <div className="card-body">
                                        <h3>Detailed Records</h3>
                                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-icon"></div>
                                    <div className="card-body">
                                        <h3>Fully Customizable</h3>
                                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <section>
                    <div className="cta-section">
                        <div className="cta-section-background">
                            <BgBoost width={windowWidth} />
                        </div>
                        <div className="cta-section-content">
                            <h2 className='fs-secondary-heading fc-secondary-heading-white'>Boost your links today</h2>
                            <button className='button'>Get Started</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    )
}

export default Home;