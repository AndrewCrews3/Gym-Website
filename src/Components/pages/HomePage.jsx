import React from 'react'
import Navbar from '../Navbar'
import Introduction from '../Introduction'
import FindLocation from '../FindLocation'
import Activity from '../Activity'
import photo from '../../assets/dumbell.jpg'


function HomePage() {
  return (
    <>
      <Navbar />
      <Introduction />
      <FindLocation />
      <Activity  classdiv="weight-room" sport= "Weight Room" desc = "Ready to lift some weights?"/>

    </>
  )
}

export default HomePage