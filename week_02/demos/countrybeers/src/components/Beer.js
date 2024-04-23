import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const ArticleDefault = styled.article`
  border: 1px solid gold;
`;

export default function Beer({ beer }) {
  return (
    <ArticleDefault>
      <Button variant="contained" color="primary">
        BUTTON
      </Button>
      <h3>
        {beer.title} - {beer.alchool}
      </h3>
      <p>{beer.description}</p>
    </ArticleDefault>
  );
}
