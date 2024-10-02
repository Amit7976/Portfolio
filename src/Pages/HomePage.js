import React from 'react'
import LandingPage from "../components/LandingPage";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import WorkShow from "../components/Workshow";
import Notify from "../components/Notify";
import Companies from "../components/Companies";
import Skills from '../components/Skills';
import WebsiteTypes from '../components/WebsiteTypes';

const HomePage = () => {
  return (
    <>
     <main>
          <LandingPage />
          <WebsiteTypes/>
          <Companies/>
          <Skills />
          <WorkShow />
          <Testimonial />
          <Blogs />
          <Contact />
          <Notify />
        </main> 
    </>
  )
}

export default HomePage
