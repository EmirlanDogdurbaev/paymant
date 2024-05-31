import React from 'react'
import classes from './BackgroundSpot.module.scss'
import spot from './back test.svg'
export default function BackgroundSpot() {
  return (
    <div style={{backgroundImage:`url(${spot})`}} className={classes.BackgroundSpot}></div>
  )
}
