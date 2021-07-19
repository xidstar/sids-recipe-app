import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
   {
      site {
        info: siteMetadata {
          complexData {
            age
            name
          }
          author
          description
          simpleData
          title
          person {
            age
            name
          }
        }
      }
    }
`

const FetchData = () => {
  const {site: {
    info: {title}
  }} = useStaticQuery(getData)
  
  return (
    <div>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
      <h2>{title}</h2>
    </div>
  )
}

export default FetchData
