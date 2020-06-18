import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "img/mapa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;