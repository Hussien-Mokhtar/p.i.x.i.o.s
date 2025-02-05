import React from 'react'
import MidNav from '../LAYOUT/MidNav'
import Footer1 from '../LAYOUT/Footer'
import AboutUsB from './AboutUs-B'
import AboutUsA from './AboutUs-A'
import AboutUsC from './AboutUs-C'
import AboutUsD from './AboutUs-D'
import ArrowTop from '../LAYOUT/ArrowTop'

export default function MainAboutUs() {
  return (
    <>
    <MidNav/>
      <AboutUsA/>
      <AboutUsB/>
      <AboutUsC/>
      <AboutUsD/>
      <Footer1/>
      <ArrowTop/>
      
    </>
  )
}
