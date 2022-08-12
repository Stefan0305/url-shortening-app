import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ReactComponent as IllustrationWorking } from '../images/illustration-working.svg';
import { ReactComponent as BgBoostDesktop } from '../images/bg-boost-desktop.svg';
import { ReactComponent as BgShortenDesktop } from '../images/bg-shorten-desktop.svg';


function Home() {
    return (
        <div>
            <Header />

            <main className="main-container">
                <section>

                    <div className="light-section">
                        <div className="heading-section">
                            <h1>More than just shorter links</h1>
                            <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                            <button className="getstarted-btn">Get Started</button>
                        </div>
                        <div className="image-section">
                            <IllustrationWorking />
                        </div>
                    </div>

                    <div className="dark-section">
                        <div className="submit-link-section">
                            <form action="" method="post">
                                <BgShortenDesktop />
                                <input type="text" name="link-input-field" id="link-input-field" />
                                <button>Shorten It!</button>
                            </form>
                        </div>
                        <div>
                            <h2>Advanced Statistics</h2>
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

                </section>

                <section>
                    <div className="container cta-section">
                        <div className="cta-section-background">
                            <BgBoostDesktop />
                        </div>
                        <div className="cta-section-content">
                            <h2>Boost your links today</h2>
                            <button>Get Started</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    )
}

export default Home;