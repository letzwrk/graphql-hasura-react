/*

import * as React from 'react';
import { graphql } from "gatsby"



Collection Route Components

https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/


export default function Component(props) {
  return props.data.fields.sku + props.params.name
}
// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query($id: String) {
    product(id: { eq: $id }) {
      fields {
        sku
      }
    }
  }
`





/*

export default function Component(props) {
      return props.data.fields.sku + props.params.name
    }
   
    // This is the page query that connects the data to the actual component. Here you can query for any and all fields
    // you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
    // to connect to this GraphQL query.
    export const query = graphql`
      query($id: String) {
        product(id: { eq: $id }) {
          fields {
            sku
          }
        }
      }
    `
    */

    // check and add algolia___AI GENERATED;