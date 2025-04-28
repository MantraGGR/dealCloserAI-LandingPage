import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'

import NavBar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'

import Experience from './sections/Experience'

import TechStack from './sections/TechStack'

import Testemonials from './sections/Testimonials'

import Contact from './sections/Contact'

import Footer from './sections/Footer'

import PricingSection from './sections/Pricing'
const App = () => {
    return (
        <>
        <NavBar/>
        <Hero/>
        {/*<ShowcaseSection/>*/}
        <LogoSection/>
        <FeatureCards/>
        <Experience/>
        {/*<TechStack/>*/}
        {/*<Testemonials/>*/}
        <PricingSection/>
        <Contact/>
        <Footer/>
        

        </>
    )
}

export default App