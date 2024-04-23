import React from "react";
import styled from "styled-components";

const ArticleDefault = styled.article`
  border: 1px solid gold;
`;

export default function Beer({ beer }) {
  return (
    <ArticleDefault>
      <h3>
        {beer.title} - {beer.alchool}
      </h3>
      <p>{beer.description}</p>
    </ArticleDefault>
  );
}
