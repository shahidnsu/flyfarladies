
import React from "react";
import Secondarynavbar from "./Secondarynavbar";
import Topnavbar from "./Topnavbar";
import Toursection from "./Toursection";
import Footer from "./Footer";
import Jobsection from "./Jobsection";
import MainImage from "./Mainimage";
import Mainhero from "./Mainhero";
import Dealsection from "./Dealsection";
import Teamsection from "./Teamsection";
import NewsletterSection from "./NewsletterSection";




const Home = () => {
    return (
        
        <div>
        <Topnavbar />
        <Secondarynavbar />
        <Mainhero />
        <Toursection />
        <Jobsection /> 
        <MainImage />
        <Dealsection />
        <Teamsection />
        <NewsletterSection />
       
         <Footer />
        
        

       

        </div>
    )
}
export default Home;