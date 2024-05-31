import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import BackgroundSpot from '../components/BackgroundSpot/BackgroundSpot'
import Footer from '../components/Footer/Footer'
import HowItWorks from '../components/HowItWorks/HowItWorks'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Video/>
            <BackgroundSpot/>
            <HowItWorks/>
            <Footer/>
        </div>
    )
}


export default HomePage;