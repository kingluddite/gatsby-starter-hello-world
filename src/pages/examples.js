import React from 'react';
import { graphql } from 'gatsby';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/layout';

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data;

  return (
    <Layout>
      <p>Hello from examples page</p>
      <h2>
        <strong>Author: </strong> {author}
      </h2>
      <Header />
      <HeaderStatic />
    </Layout>
  );
};

export const data = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`;

export default examples;
