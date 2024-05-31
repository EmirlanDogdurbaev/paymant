import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import BackgroundSpot from '../components/BackgroundSpot/BackgroundSpot'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Hero/>
            <Video/>
            <BackgroundSpot/>
            <Footer/>
        </div>
    )
}


export default HomePage;