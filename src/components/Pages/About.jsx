import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';

var bnrimg = require('./../../images/avshin.jpg');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="ՈՐԱԿ ՍՏԵՂԾԵԼՈՎ, ԱՎԵԼԻ ՈՒԺԵՂ ՀԱՄԱՅՆՔՆԵՐԻ ԿԱՌՈՒՑՈՒՄ." pagename="Մեր մասին" bgimage={bnrimg}/>
                    <About4 />
                    <Specialization4 />
                    {/* <Team3 /> */}
                    <AboutSummary />

                </div>

                <Footer />

            </>
        );
    };
};

export default About;