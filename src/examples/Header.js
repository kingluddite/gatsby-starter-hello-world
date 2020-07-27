import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`;

const Header = () => {
  // const data = useStaticQuery(getData);
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData);

  // console.log(data);

  return (
    <div>
      {/* <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.person.name}</h2> */}
      <h1>{title}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
