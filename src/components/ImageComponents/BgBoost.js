import { ReactComponent as BgBoostDesktop } from '../../images/bg-boost-desktop.svg';
import { ReactComponent as BgBoostMobile } from '../../images/bg-boost-mobile.svg';

function BgBoost(props) {

    const width = props.width;
    console.log(typeof width)

    if (width <= 375) {
        return <BgBoostMobile />
    }
    if (width > 375) {
        return <BgBoostDesktop />
    }

}

export default BgBoost;