import React from 'react'
import Video from '../components/Video/Video'
import classes from './HomePage.module.scss'
import BackgroundSpot from '../components/BackgroundSpot/BackgroundSpot'
export default function HomePage() {
  return (
    <div className={classes.HomePage}>
        <Video/>
        <BackgroundSpot/>
    </div>
  )
}
