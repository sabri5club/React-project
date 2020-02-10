import React, { Component } from 'react'
import Header  from './Header';
import Top_Header  from './Top_Header';
import Footer  from './Footer';
import Slider  from './Slider';
import Sub_Footer  from './Sub_Footer';
import Central  from './Central';
import Testimonials from './Testimonials';


export default class Accueil extends Component {
    render() {
        return (
            <div>
           
                {/* <Top_Header />
      
    

     <Header /> */}
   
     <Slider />
 
      <Central />
     
     
     <Footer />
   
     <Sub_Footer />
  
            </div>
        )
    }
}
