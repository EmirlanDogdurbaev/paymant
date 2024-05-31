
import React from 'react'
import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import BackgroundSpot from '../components/BackgroundSpot/BackgroundSpot'
import Comments from '../components/Comments/Comments'

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Video/>
            <Comments/>
            {/* <BackgroundSpot/> */}
        </div>
    )
}


export default HomePage;