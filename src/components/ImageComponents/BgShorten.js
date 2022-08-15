import { ReactComponent as BgShortenDesktop } from '../../images/bg-shorten-desktop.svg';
import { ReactComponent as BgShortenMobile } from '../../images/bg-shorten-mobile.svg';

function BgShorten(props) {

    const width = props.width;
    console.log(typeof width)

    if (width <= 375) {
        return <BgShortenMobile />
    }
    if (width > 375) {
        return <BgShortenDesktop />
    }

}

export default BgShorten;