import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import img from '../images/large-image.jpg';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "dog-one.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "large-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "large-image.jpg" }) {
      childImageSharp {
        # default 800
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="text" width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image/blure</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h2>Content</h2>
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <h2>Content</h2>
        </div>
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  );
};

export default Images;
