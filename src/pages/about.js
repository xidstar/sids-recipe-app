import React from 'react'
import Layout from './components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from './components/RecipesList'
import SEO from "./components/SEO"

const About = ({data: {allContentfulRecipe : {nodes : recipes}}}) => {
  
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perferendis nostrum reprehenderit quaerat vero veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, laboriosam?</p>
            <Link to="/contact" className="btn">contact</Link>
          </article>
          <StaticImage src="./assets/images/about1.jpeg" alt="" className="about-img" placeholder="tracedSVG"/>
        </section>
        <section className="featured-recipes">
          <h5>Featured Awesomesauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        cookTime
        title
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        prepTime
      }
    }
  }
`

export default About
