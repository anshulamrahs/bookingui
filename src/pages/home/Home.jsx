import React from 'react'
import BestStays from '../../components/bestStays/BestStays'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.scss'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="featuredTitle">Browse By Property Type</h1>
        <PropertyList/>
        <h1 className="featuredTitle">Homes Guest Love</h1>
        <BestStays/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home