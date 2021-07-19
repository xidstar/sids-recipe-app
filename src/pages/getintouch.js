import React from 'react'
import Layout from './components/Layout'
import { graphql } from 'gatsby'
import RecipesList from './components/RecipesList'
import SEO from "./components/SEO"

const Getintouch = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact" description="this is the contact page" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique laboriosam incidunt aut rem est nam accusantium natus quibusdam corrupti?</p>
            <p>Laboriosam incidunt aut rem est nam accusantium natus quibusdam corrupti?</p>
            <p>Dolor sit amet consectetur adipisicing elit. Nisi similique laboriosam incidunt aut rem est nam accusantium natus quibusdam corrupti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique</p>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/xzbyakvk" method="POST">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message"></label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Featured Awesomesauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

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

export default Getintouch
