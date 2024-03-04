import React from 'react'
import Banner from '../components/Banner/Banner'
import CallToActionSection from '../components/CallToActionSection/CallToActionSection'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import ProductsList from './ProductsList'

const Home = () => {
  return (
    <>
    <Banner />
    <ProductsList />
    <CallToActionSection />
    <ContactInfo />
    </>
  )
}

export default Home