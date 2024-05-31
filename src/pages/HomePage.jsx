import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import Footer from '../components/Footer/Footer'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Comments from '../components/Comments/Comments'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            
            <HowItWorks/>
            <Video/>
            <Comments/>
            <Footer/>
        </div>
    )
}


export default HomePage;