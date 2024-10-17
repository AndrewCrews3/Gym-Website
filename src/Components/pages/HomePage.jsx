import React from 'react'
import Navbar from '../Navbar'
import Introduction from '../Introduction'
import FindLocation from '../FindLocation'
import Activity from '../Activity'
import dumbbell from '../../assets/dumbbell.jpg'
import basketball from '../../assets/basketballcourt.jpg'


function HomePage() {
  return (
    <>
      <Navbar />
      <Introduction />
      <FindLocation />
      <Activity  
        classdiv="weight-room" 
        img = {dumbbell} 
        sport= "Weight Room" 
        desc = "Our weight room is fully equipped with everything you need for a comprehensive workout. From benches and dumbbells to free weights, kettlebells, and resistance machines, we offer a wide range of strength-training tools. Plus, you'll find state-of-the-art cardio equipment to help you reach your fitness goals. Whatever your workout style, we’ve got you covered!"
        />

      <Activity
      classdiv='basketball'
      img={basketball}
      sport='basketball'
      desc='ur basketball court is amazing
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, rem explicabo assumenda ipsum dolor sit amet consectetur adipisicing elit. Eos, rem explicabo assumenda ipsum dolor sit amet consectetur adipisicing elit. Eos, rem explicabo assumenda ipsum dolor sit amet consectetur adipisicing elit. Eos, rem explicabo assumenda ' /> 

    </>
  )
}

export default HomePage