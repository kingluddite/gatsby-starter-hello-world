import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import styles from '../components/products.module.css';

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data;

  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product) => {
          console.log(product);

          return (
            <article key={product.id}>
              <h2>{product.title}</h2>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        id
        price
        info {
          info
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`;

export default ComponentName;
