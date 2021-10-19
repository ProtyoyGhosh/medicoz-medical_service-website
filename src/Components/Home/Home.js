import React from 'react';
import Ambulance from '../Ambulance/Ambulance';
import Banner from '../Banner/Banner';
import Bonus from '../Bonus/Bonus';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cards></Cards>
            <Bonus></Bonus>
            <Ambulance></Ambulance>
            <Footer></Footer>
        </div>
    );
};

export default Home; <h1>This is home</h1>