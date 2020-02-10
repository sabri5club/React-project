        import React, { Component } from 'react'
        import { Button, Form, Nav, FormControl, Navbar } from 'react-bootstrap';
        import {BrowserRouter as Router, Route} from 'react-router-dom'
        import {Link} from 'react-router-dom'

        export default class Header extends Component {
            render() {
                return (
              
                    <div>
                     
                        <header className="App-header">   
                        <ul class="nav">
  <li class="nav-item">
    <Link  to="/Accueil" class="nav-link" >Accueil</Link>
  </li>
  <li class="nav-item">
    <Link  to="/Coran" class="nav-link" >Coran</Link>
  </li>
  <li class="nav-item">
    <Link to="/Hadith" class="nav-link" >Hadith</Link>
  </li>
  <li class="nav-item">
    <Link to="Histoire_prophète" class="nav-link" >Histoire prophètes</Link>
  </li>
  <li class="nav-item">
    <Link to="/Contact"  class="nav-link">Contact</Link>
  </li>
  <li class="nav-item">
    <Link to="/Testimonials"   class="nav-link" >Témoignages</Link>
  </li>
  <li class="nav-item">
    <Link to="/A_propos"   class="nav-link" >A propos</Link>
  </li>
</ul>
                        </header>
                      
                    </div>
                  
                )
            }
        }
