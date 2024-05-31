import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Comments from '../components/Comments/Comments'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Hero/>
            
            <HowItWorks/>
            <Video/>
            <Comments/>
            <Footer/>
        </div>
    )
}


export default HomePage;