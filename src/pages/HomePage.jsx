import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import BackgroundSpot from '../components/BackgroundSpot/BackgroundSpot'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Video/>
            <BackgroundSpot/>
            <Footer/>
        </div>
    )
}


export default HomePage;