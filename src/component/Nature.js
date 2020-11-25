import React from 'react';
import Sidebar from './Sidebar';
import '../css/nature.css';
import Scroll from './BackTopButton';
import NavbarSmall from './NavbarSmall';
import Footer from './Footer';
import nature from '../images/nature.jpeg';
import hero1 from '../images/hero1.jpg';
import nr1 from '../images/nature/nr1.jpg';
import nr2 from '../images/nature/nr2.jpeg';
import nr3 from '../images/nature/nr3.jpeg';
import nr4 from '../images/nature/nr4.jpeg';
import nr5 from '../images/nature/nr5.jpeg';
import nr6 from '../images/nature/nr6.jpeg';
import nr7 from '../images/nature/nr7.jpeg';
import nr11 from '../images/nature/nr11.jpeg';
import nr12 from '../images/nature/nr12.jpg';
import banner from '../images/banner.jpeg';

export default function Nature(){
    return(
        <div>
            <Sidebar/>
            <NavbarSmall/>
            <Scroll showBelow={250}/>
            <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4 banner-nr">
                    Nature </h2> 
                    <hr className="line-nr"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-nr">
            <div className="container"><br/>
                <div className="row row-cols-1 row-cols-md-3 body-nr">
                    <div className="col mb-4">
                        <div className="card box-nr">
                        <img src={nr1} className="card-img-top" alt="Kandy"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr">
                        <img src={nr2} className="card-img-top" alt="Kandy"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr">
                        <img src={nr3} className="card-img-top" alt="Kandy"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr hero1">
                        <img src={hero1} className="card-img-top" alt="Goa"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr">
                        <img src={nr5} className="card-img-top" alt="Munnar"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr nr4">
                        <img src={nr4} className="card-img-top" alt="Bangalore"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr nr12">
                        <img src={nr12} className="card-img-top" alt="Hampi"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr">
                        <img src={nr7} className="card-img-top" alt="Vellore"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr banner">
                        <img src={banner} className="card-img-top" alt="Hampi"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card box-nr nr6">
                        <img src={nr6} className="card-img-top" alt="Bangalore"/>
                        </div>
                    </div>
                    <div className="col mb-4"></div>
                    <div className="col mb-4">
                        <div className="card box-nr nr11">
                        <img src={nr11} className="card-img-top" alt="Hampi"/>
                        </div>
                    </div>
                </div>
            </div>
            </div><hr style={{width:'75%'}}></hr>
            <Footer/>
        </div>
    );
}