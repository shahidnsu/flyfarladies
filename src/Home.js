
import React from "react";
import Secondarynavbar from "./Components/Secondarynavbar";
import Topnavbar from "./Components/Topnavbar";
import Toursection from "./Components/Toursection";
import Footer from "./Components/Footer";
import Jobsection from "./Components/Jobsection";
import MainImage from "./Components/Mainimage";
import Mainhero from "./Components/Mainhero";
import Dealsection from "./Components/Dealsection";
import Teamsection from "./Components/Teamsection";
import NewsletterSection from "./Components/NewsletterSection";




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