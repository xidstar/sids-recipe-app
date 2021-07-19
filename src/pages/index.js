import React from "react"
import Layout from './components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "./components/AllRecipes"
import SEO from "./components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage src="./assets/images/main.jpeg" alt="eggs" className="hero-img" placeholder="blurred" layout="fullWidth" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipe</h1>
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </header>
      <AllRecipes />
      </main>
    </Layout>
  )
  
}
