import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="header" id='top'>
            <div className="logo">Foodie's Delight</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <section className="hero-section" id="home">
            <div className="hero-content">
                <h1>Welcome to Foodie's Delight</h1>
                <p>Discover the best food in town with us</p>
                <a href="#menu" className="hero-button">Explore Our Menu</a>
            </div>
        </section>
        <section className="featured-dishes" id="menu">
            <h2>Featured Dishes</h2>
            <div className="dishes-container">
                <div className="dish">
                    <img src="Spaghetti.jpg" alt="Spaghetti" />
                    <h3>Spaghetti</h3>
                </div>
                <div className="dish">
                    <img src="pizza.jpg" alt="Pizza" />
                    <h3> Pizza</h3>
                </div>
                <div className="dish">
                    <img src="salad.jpg" alt="caesarSalad" />
                    <h3>Caesar Salad</h3>
                </div>
            </div>
        </section>
        <footer className="footer" id="contact">
            <div className="footer-content" id='about'>
                <p>&copy; 2024 Foodie's Delight. All Rights Reserved.</p>
                <p><a href="#top">Back to Top</a></p>
            </div>
        </footer>
    </>
  )
}

export default App
